const request = require('supertest');
const nock = require('nock');

const app = require('../../app');
const {
  common: { pokemonApiBaseUrl }
} = require('../../config');
const {
  properGetPokemonRespButterfree,
  responseWithError,
  properGetAllPokemonsResponse,
  properGetPokemonRespPikachu
} = require('../utils/schemas/pokemonServiceSchemas');
const { hashedPokemonsNamesSchema, pokemons } = require('../utils/schemas/pokemonsSchemas');

describe('GET /pokemons', () => {
  describe('Successful response', () => {
    let response = null;
    beforeAll(async done => {
      nock(`${pokemonApiBaseUrl}`)
        .get('/pokemon/butterfree')
        .reply(200, properGetPokemonRespButterfree);

      nock(`${pokemonApiBaseUrl}`)
        .get('/pokemon/pikachu')
        .reply(200, properGetPokemonRespPikachu);

      response = await request(app)
        .get('/pokemons')
        .query({ pokemonsNames: ['butterfree', 'pikachu'] });
      return done();
    });

    it('status is 200', () => {
      expect(response.status).toBe(200);
    });
    it('response has pokemons schema', () => {
      expect(response.body).toMatchObject(pokemons);
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
    it('message is Request failed with status code 503', () => {
      expect(response.body.message).toBe('Request failed with status code 503');
    });
    it('origin is Pokemon service', () => {
      expect(response.body.origin).toBe('Pokemon service');
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
    it('response has hashedPokemonsNames schema', () => {
      expect(response.body).toMatchObject(hashedPokemonsNamesSchema);
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
    it('message is Request failed with status code 503', () => {
      expect(response.body.message).toBe('Request failed with status code 503');
    });
    it('origin is Pokemon service', () => {
      expect(response.body.origin).toBe('Pokemon service');
    });
  });
});
