// Cria uma nova instância para o express
const express = require('express');
// Importa um pacote para criar strings aleatórias
const crypto = require('crypto');
// Importa a conexão com o banco de dados
// const connection = require('./database/connection');
// Cria uma nova instância para as rotas
const routes = express.Router();

// Importa o pacote para fazer validação das requisições
const { celebrate, Segments, Joi } = require('celebrate');

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
routes.post('/sessions', celebrate({
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required()
    })
}), SessionController.create);

// Profile
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}), ProfileController.index);

// ONGs
routes.get('/ongs', OngController.index);
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        //whatsapp: Joi.number().required().min(10).max(11),
        whatsapp: Joi.string().required().min(10),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}), OngController.create);
routes.get('/ongs', OngController.create);

// Casos
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
}), IncidentController.index);
routes.post('/incidents', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown(),
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required()
    })
}), IncidentController.create);
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}), IncidentController.delete);

module.exports = routes;