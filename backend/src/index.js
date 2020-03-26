// Importando o pacote express para manipular as rotas
const express = require('express');  // Importa um pacote
// Importando o pacote cors para controlar o acesso à aplicação
const cors = require('cors');  // Importa um pacote
// Importando as rotas (exportadas pelo arquivo routes.js)
const routes = require('./routes'); // Importa um arquivo, por isso, tem o caminho ./

// Criando a aplicação
const app = express();

// Define que o padrão de formato de dados das requisições é JSON
app.use(express.json());

// Define quais domínios podem acessar a aplicação
app.use(cors());

// Define que a aplicação vai utilizar as rotas definidas/importadas
app.use(routes);

// Utiliza a porta 3000
app.listen(3333);

// Definindo as rotas da aplicação
/*
app.post('/', (request, response) => {
    // Recebe os parâmetros enviados por query
    // const params = request.query;
    // Recebe os parâmetros enviados pela rota
    // const params = request.params;
    // Recebe os parâmetros enviados pelo corpo
    const params = request.body;

    console.log(params);

    //return response.send('Hello World!');
    return response.json({
        evento : 'Semana OminiStack 11',
        aluno: 'André Guimarães'
    });
});
*/

// Recurso (resource) --> define o "conteúdo" que a aplicação vai acessar, como "Usuários", "Produtos", etc

// Métodos
// GET: buscar uma informação no backend
// POST: criar uma informação no backend
// PUT: alterar uma informação no backend
// DELETE: excluir uma informação no backend

// Tipos de parâmetros
// Query params: parâmetros nomeados e enviados na rotas a partir do uso de "?" para filtros, paginação, etc.
// Route params: parâmetros utilizados para identificar recursos
// Request body: o corpo da requisição


/*
* TIPOS DE BANCO
*  SQL --> MySQL, SQLite, Oracle, Postgree, etc.
*  NoSQL --> MongoDB, CouchDB, etc.
*
*/
 

/*
* DRIVER: SELECT * FROM user
* Query Builder: table('user').select('*') --> http://knexjs.org/

*  
*
*/
 


