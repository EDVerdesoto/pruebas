// user.test.js
const request = require('supertest');
const app = require('../src/app');
const { resetUsers } = require('../src/controllers/user.controller');

describe('User API', () => {
  // Antes de CADA test, limpiamos el array en memoria
    beforeEach(() => {
    resetUsers();
    });

    //Prueba inicial: GET /api/users debe devolver lista vacía
    test('GET /api/users should return an empty list initially', async () => {
    const resp = await request(app).get('/api/users');
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual([]);
    });

    //Prueba para crear un usuario exitosamente
    test('POST /api/users should create a new user', async () => {
    const newUser = { name: 'Soto', email: 'soto@ejemplo.com' };
    const resp = await request(app)
        .post('/api/users')
        .send(newUser);

    expect(resp.statusCode).toBe(201);
    expect(resp.body).toHaveProperty('id');
    expect(resp.body.name).toBe('Soto');
    expect(resp.body.email).toBe('soto@ejemplo.com');
    });

    //Prueba de error: POST /api/users con datos incompletos debe retornar 400
    test('POST /api/users should fail if data is incomplete', async () => {
    const resp = await request(app)
        .post('/api/users')
        .send({ s: 'Carlos' }); 
    expect(resp.statusCode).toBe(400);
    expect(resp.body).toHaveProperty('message', 'Name and email are required');
    });

    //Flujo end-to-end simulado:
    test('After creating a user, GET /api/users returns the newly created user', async () => {
    const user1 = { name: 'Juan', email: 'juan@ejemplo.com' };
    const user2 = { name: 'Ana', email: 'ana@ejemplo.com' };

    // POST user1
    const resp1 = await request(app).post('/api/users').send(user1);
    expect(resp1.statusCode).toBe(201);
    expect(resp1.body).toHaveProperty('id');
    expect(resp1.body.name).toBe('Juan');
    expect(resp1.body.email).toBe('juan@ejemplo.com');

    // POST user2
    const resp2 = await request(app).post('/api/users').send(user2);
    expect(resp2.statusCode).toBe(201);
    expect(resp2.body).toHaveProperty('id');
    expect(resp2.body.name).toBe('Ana');
    expect(resp2.body.email).toBe('ana@ejemplo.com');

    const listResp = await request(app).get('/api/users');
    expect(listResp.statusCode).toBe(200);
    expect(Array.isArray(listResp.body)).toBe(true);
    expect(listResp.body.length).toBe(2);

    const names = listResp.body.map((u) => u.name);
    const emails = listResp.body.map((u) => u.email);
    expect(names).toContain('Juan');
    expect(names).toContain('Ana');
    expect(emails).toContain('juan@ejemplo.com');
    expect(emails).toContain('ana@ejemplo.com');
    });
});
