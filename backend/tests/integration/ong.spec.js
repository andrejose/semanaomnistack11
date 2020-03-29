// Importa o pacote que executa chamadas HTTP no servidor
const request = require('supertest');
// Importa a aplicação
const app = require('../../src/app');
// Importa a conexão com o banco de dados
const connection = require('../../src/database/connection');

// Cria um teste de integração para as ONGs
describe('ONG', () => {
    // Executa as migrações do banco de dados destinado aos testes
    beforeEach(async () => {
        // Zera o banco de dados antes de iniciar os testes
        await connection.migrate.rollback();        
        // Realiza a migração para criação das tabelas 
        await connection.migrate.latest();        
    });

    // Ação executa após todos os testes
    afterAll(async () => {
        await connection.destroy();
    });

    // Teste a criação de novas ONGs
    it('should be able to create a new ONG', async () => {

        // Executa uma requisição para cadastrar nova ONG
        const response = await request(app)
            .post('/ongs')
            //.set('Authorization', 'db9b0aaa') // Passando um dado via Header da requisição
            .send({
                name: "Mais uma ONG",
                email: "contato@gmail.com",
                whatsapp: "+55 11 3333-8888",
                city: "São Paulo",
                uf: "SP"
            });

        // Analisa a resposta vinda do servidor
        //console.log(response.body);
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});