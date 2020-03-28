const request = require('supertest');
const nock = require('nock');

const app = require('../../app');
const {
  common: { pokemonApiBaseUrl }
} = require('../../config');
const {
  properGetPokemonResponse,
  responseWithError,
  properGetAllPokemonsResponse
} = require('../schemas/pokemonServiceSchemas');

describe('GET /pokemons', () => {
  describe('Successful response', () => {
    let response = null;
    beforeAll(async done => {
      nock(`${pokemonApiBaseUrl}`)
        .get(/pokemon\/([^\s]+)/)
        .times(2)
        .reply(200, properGetPokemonResponse);

      response = await request(app)
        .get('/pokemons')
        .query({ pokemonsNames: ['butterfree', 'pikachu'] });
      return done();
    });

    it('status is 200', () => {
      expect(response.status).toBe(200);
    });

    it('response has pokemons property', () => {
      expect(response.body).toHaveProperty('pokemons');
    });
  });

  describe('Response with error', () => {
    let response = null;
    beforeAll(async done => {
      nock(`${pokemonApiBaseUrl}`)
        .get(/pokemon\/([^\s]+)/)
        .times(2)
        .reply(503, responseWithError);

      response = await request(app)
        .get('/pokemons')
        .query({ pokemonsNames: ['butterfree', 'pikachu'] });
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

describe('GET /pokemons_names', () => {
  describe('Successful response', () => {
    let response = null;
    beforeAll(async done => {
      nock(`${pokemonApiBaseUrl}`)
        .get(/pokemon/)
        .reply(200, properGetAllPokemonsResponse);

      response = await request(app).get('/pokemons_names');
      return done();
    });

    it('status is 200', () => {
      expect(response.status).toBe(200);
    });
  });

  describe('Response with error', () => {
    let response = null;
    beforeAll(async done => {
      nock(`${pokemonApiBaseUrl}`)
        .get(/pokemon/)
        .reply(503, responseWithError);

      response = await request(app).get('/pokemons_names');
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
