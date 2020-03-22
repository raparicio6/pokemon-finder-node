const request = require('supertest');
const nock = require('nock');

const app = require('../../app');
const {
  common: { pokemonApiBaseUrl }
} = require('../../config');
const { properResponse } = require('../schemas/pokemonServiceSchemas');

describe('GET /pokemons/:pokemonName', () => {
  let response = null;
  beforeAll(async done => {
    nock(`${pokemonApiBaseUrl}`)
      .get(/pokemon\/([^\s]+)/)
      .reply(200, properResponse);

    response = await request(app).get('/pokemons/butterfree');
    return done();
  });

  it('status is 200', () => {
    expect(response.status).toBe(200);
  });

  it('response has pokemon property', () => {
    expect(response.body).toHaveProperty('pokemon');
  });
});
