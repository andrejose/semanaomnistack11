// Cria uma nova instância para o knex
const knex = require('knex');

// Importa as configurações do banco de dados
const configuration = require('../../knexfile');

// Define quais configurações de banco a aplicação vai utilizar
const connection = knex(configuration.development);

// Exporta a variável
module.exports = connection;



