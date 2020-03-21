const request = require('supertest');

const app = require('../app');

let response = null;
beforeAll(async done => {
  response = await request(app).get('/health');
  return done();
});

it('/health respond with status 200', () => {
  expect(response.status).toBe(200);
});

it('/health respond with uptime property', () => {
  expect(response.body).toHaveProperty('uptime');
});

it('uptime property is a number', () => {
  expect(typeof response.body.uptime).toBe('number');
});
