const request = require('supertest');

const app = require('../app');

describe('GET /health', () => {
  let response = null;
  beforeAll(async done => {
    response = await request(app).get('/health');
    return done();
  });

  it('respond with status 200', () => {
    expect(response.status).toBe(200);
  });

  it('respond with uptime property', () => {
    expect(response.body).toHaveProperty('uptime');
  });

  it('uptime property is a number', () => {
    expect(typeof response.body.uptime).toBe('number');
  });
});
