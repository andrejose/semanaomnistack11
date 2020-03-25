// Importa a conexão com o banco de dados
const connection = require('../database/connection');

module.exports = {

    async create (request, response) {

        const { id } = request.body;

        const ong = await connection('ongs')
        .where('id', id)
        .select('name' )
        .first();

        if (!ong) {
            // 400 --> Bad Request
            return response.status(400).json({ error: 'No ONG with this ID' });
        }
    
        return response.json(ong);
    
    }
}