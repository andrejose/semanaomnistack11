// Cria uma nova instância para o knex
const knex = require('knex');

// Importa as configurações do banco de dados
const configuration = require('../../knexfile');

// Acessa uma variável ambiente
// https://blog.rocketseat.com.br/variaveis-ambiente-nodejs/
const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development;
 
// Define quais configurações de banco a aplicação vai utilizar
const connection = knex(config);

// Exporta a variável
module.exports = connection;



