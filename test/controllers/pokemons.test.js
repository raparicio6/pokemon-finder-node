const request = require('supertest');
const app = require('../../app');
const { hashedPokemonsNamesSchema, pokemons } = require('../testUtils/schemas/pokemonsSchemas');
const {
  mockGetAllPokemons,
  mockGetPokemon,
  mockGetPokemonWithError,
  mockGetAllPokemonsWithError
} = require('../testUtils/mocks');

describe('GET /pokemons', () => {
  describe('Successful response', () => {
    let response = null;
    beforeAll(async done => {
      mockGetPokemon('Butterfree');
      mockGetPokemon('Pikachu');
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

  describe('pokeapi service respond with error respond with error', () => {
    let response = null;
    beforeAll(async done => {
      mockGetPokemonWithError(2);
      response = await request(app)
        .get('/pokemons')
        .query({ pokemonsNames: ['butterfree', 'pikachu'] });
      return done();
    });

    it('status is 503', () => {
      expect(response.status).toBe(503);
    });
    it('message is Service unavailable', () => {
      expect(response.body.message).toBe('Service unavailable');
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
      mockGetAllPokemons();
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

  describe('pokeapi service respond with error respond with error', () => {
    let response = null;
    beforeAll(async done => {
      mockGetAllPokemonsWithError();
      response = await request(app).get('/pokemons_names');
      return done();
    });

    it('status is 503', () => {
      expect(response.status).toBe(503);
    });
    it('message is Service unavailable', () => {
      expect(response.body.message).toBe('Service unavailable');
    });
    it('origin is Pokemon service', () => {
      expect(response.body.origin).toBe('Pokemon service');
    });
  });
});
