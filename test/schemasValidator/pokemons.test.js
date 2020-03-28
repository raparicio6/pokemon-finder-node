const request = require('supertest');
const nock = require('nock');

const app = require('../../app');
const {
  properGetPokemonRespButterfree,
  properGetPokemonRespPikachu
} = require('../utils/schemas/pokemonServiceSchemas');
const {
  common: { pokemonApiBaseUrl }
} = require('../../config');

describe('getPokemonsSchema', () => {
  describe('pokemonsNames is an array of strings', () => {
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
  });

  describe('pokemonsNames is an empty array', () => {
    let response = null;
    beforeAll(async done => {
      response = await request(app)
        .get('/pokemons')
        .query({ pokemonsNames: [] });
      return done();
    });

    it('status is 422', () => {
      expect(response.status).toBe(422);
    });
    it('internal_code is schema_error', () => {
      expect(response.body.internal_code).toBe('schema_error');
    });
    it('message is ["pokemonsNames has to be an array of strings."]', () => {
      expect(response.body.message).toStrictEqual(['pokemonsNames has to be an array of strings.']);
    });
  });
  describe('pokemonsNames not as query param', () => {
    let response = null;
    beforeAll(async done => {
      response = await request(app).get('/pokemons');
      return done();
    });

    it('status is 422', () => {
      expect(response.status).toBe(422);
    });
    it('internal_code is schema_error', () => {
      expect(response.body.internal_code).toBe('schema_error');
    });
    it('message is ["pokemonsNames has to be an array of strings."]', () => {
      expect(response.body.message).toStrictEqual(['pokemonsNames has to be an array of strings.']);
    });
  });
  describe('pokemonsNames is an array of numbers', () => {
    let response = null;
    beforeAll(async done => {
      response = await request(app)
        .get('/pokemons')
        .query({ pokemonsNames: [1, 2, 3] });
      return done();
    });

    it('status is 422', () => {
      expect(response.status).toBe(422);
    });
    it('internal_code is schema_error', () => {
      expect(response.body.internal_code).toBe('schema_error');
    });
    it('message is ["pokemonsNames has to be an array of strings."]', () => {
      expect(response.body.message).toStrictEqual(['pokemonsNames has to be an array of strings.']);
    });
  });
  describe('pokemonsNames is not an array', () => {
    let response = null;
    beforeAll(async done => {
      response = await request(app)
        .get('/pokemons')
        .query({ pokemonsNames: 'pikachu' });
      return done();
    });

    it('status is 422', () => {
      expect(response.status).toBe(422);
    });
    it('internal_code is schema_error', () => {
      expect(response.body.internal_code).toBe('schema_error');
    });
    it('message is ["pokemonsNames has to be an array of strings."]', () => {
      expect(response.body.message).toStrictEqual(['pokemonsNames has to be an array of strings.']);
    });
  });
});
