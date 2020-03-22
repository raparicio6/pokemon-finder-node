const request = require('supertest');
const nock = require('nock');

const app = require('../../app');
const {
  common: { pokemonApiBaseUrl }
} = require('../../config');
const { properResponse, responseWithError } = require('../schemas/pokemonServiceSchemas');

describe('GET /pokemons/:pokemonName', () => {
  describe('Successful response', () => {
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

  describe('Response with error', () => {
    let response = null;
    beforeAll(async done => {
      nock(`${pokemonApiBaseUrl}`)
        .get(/pokemon\/([^\s]+)/)
        .reply(503, responseWithError);

      response = await request(app).get('/pokemons/butterfree');
      return done();
    });

    it('status is 503', () => {
      expect(response.status).toBe(503);
    });
    it('message is Service Unavailable', () => {
      expect(response.body.message).toBe('Service Unavailable');
    });
    it('origin is Pokemon', () => {
      expect(response.body.origin).toBe('Pokemon');
    });
  });
});
