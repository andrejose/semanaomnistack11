// Importa um pacote para criar strings aleatórias
const generateUniqueId = require('../utils/generateUniqueId');

// Importa a conexão com o banco de dados
const connection = require('../database/connection');

module.exports = {

    async index (request, response) {

        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    
    },

    async create (request, response) {
        // Recebe os parâmetros enviados por query
        // const params = request.query;
        // Recebe os parâmetros enviados pela rota
        // const params = request.params;
        // Recebe os parâmetros enviados pelo corpo
        // const data = request.body;
        // Desestruturando os dados
        const { name, email, whatsapp, city, uf } = request.body;

        // Cria uma string aleatória para a id da ONG
        const id = generateUniqueId(); 
        
        // Insere os dados no banco
        // await --> define que o insert deve ser completado para o prosseguimento do script
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });

        return response.json({ id });
    }
}