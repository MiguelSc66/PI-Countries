const request = require('supertest');
const app = require('../src/server'); 
const agent = request(app)

describe('Routes Test', () => {
  it('GET /countries should return a list of countries', async () => {
    await agent.get('/countries').expect(200);
  });

  it('GET /countries/:idPais should return a specific country', async () => {
    const response = await agent.get('/countries/Arg');
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  });

  it('GET /countries/name should return filtered countries', async () => {
    const response = await agent.get('/countries/name?pais=Argentina');
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  });

  it('GET /activities should return a list of activities', async () => {
    const response = await agent.get('/activities');
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  });

});