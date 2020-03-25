// Cria uma nova instância para o express
const express = require('express');
// Importa um pacote para criar strings aleatórias
const crypto = require('crypto');
// Importa a conexão com o banco de dados
// const connection = require('./database/connection');
// Cria uma nova instância para as rotas
const routes = express.Router();

// Importa os controladores
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
 
// Definindo as rotas da aplicação

// Listagem de todas as ONGs
/*
routes.get('/ongs', async(request, response) => {

    const ongs = await connection('ongs').select('*');

    return response.json(ongs);

});
*/

// Cadastro de ONG --> async define que a função deve ser completada para retornar o response
//routes.post('/ongs', async (request, response) => {
//    
//});

// Login
routes.post('/sessions', SessionController.create);

// Profile
routes.get('/profile', ProfileController.index);

// ONGs
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.create);

// Casos
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;