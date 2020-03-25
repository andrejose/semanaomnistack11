// Importa a conexão com o banco de dados
const connection = require('../database/connection');

module.exports = {

    async index (request, response) {

        // Verifica se existe o parâmetro page, caso não exista define o valor como 1
        const { page = 1 } = request.query

        const [ count ] = await connection('incidents').count();

        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5) // Limita a cinco registros
            .offset((page - 1) * 5) // Quantos registros vai pular
            .select([
                'incidents.*',
                'name',
                'email',
                'whatsapp',
                'city',
                'uf'
            ]);

        response.header('X-Total-Count', count['count(*)']); 
    
        return response.json(incidents);
    
    },

    async create (request, response) {

        const { title, description, value } = request.body;

        // Pega dados contidos no cabeçalho da requisição
        const ong_id = request.headers.authorization;

        // O Retorno do insert é um array com um único registro, logo é possível pegar a id do registro
        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        });

        return response.json({ id });
    },

    async delete (request, response) {

        const { id } = request.params;

        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

        // Se a ONG logada é diferente da detentora do caso
        if (incident.ong_id != ong_id) {
            // Retorna um código de NÃO AUTORIZADO
            return response.status(401).json({ error: 'Operation Not Permitted' });
        }

        await connection('incidents').where('id', id).delete();

        // Retorna um status sem conteúdo (204)
        return response.status(204).send();


    }
}