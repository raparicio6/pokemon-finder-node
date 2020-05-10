const { getPokemon, getAllPokemons } = require('../../app/services/pokemons');
const {
  mockGetAllPokemons,
  mockGetPokemon,
  mockGetPokemonWithError,
  mockGetAllPokemonsWithError
} = require('../testUtils/mocks');

describe('Pokemon Service GET /pokemon/:pokemonName endpoint', () => {
  describe('Successful response', () => {
    let pokemonApiResponse = null;
    beforeAll(async done => {
      mockGetPokemon('Butterfree');
      pokemonApiResponse = await getPokemon('butterfree');
      return done();
    });

    it('response has abilities property', () => {
      expect(pokemonApiResponse).toHaveProperty('abilities');
    });
    it('response has base_experience property', () => {
      expect(pokemonApiResponse).toHaveProperty('base_experience', expect.any(Number));
    });
    it('response has forms property', () => {
      expect(pokemonApiResponse).toHaveProperty('forms');
    });
    it('response has game_indices property', () => {
      expect(pokemonApiResponse).toHaveProperty('game_indices');
    });
    it('response has height property', () => {
      expect(pokemonApiResponse).toHaveProperty('height', expect.any(Number));
    });
    it('response has held_items property', () => {
      expect(pokemonApiResponse).toHaveProperty('held_items');
    });
    it('response has id property', () => {
      expect(pokemonApiResponse).toHaveProperty('id', expect.any(Number));
    });
    it('response has is_default property', () => {
      expect(pokemonApiResponse).toHaveProperty('is_default');
    });
    it('response has location_area_encounters property', () => {
      expect(pokemonApiResponse).toHaveProperty('location_area_encounters');
    });
    it('response has moves property', () => {
      expect(pokemonApiResponse).toHaveProperty('moves');
    });
    it('response has name property', () => {
      expect(pokemonApiResponse).toHaveProperty('name', expect.any(String));
    });
    it('response has order property', () => {
      expect(pokemonApiResponse).toHaveProperty('order');
    });
    it('response has species property', () => {
      expect(pokemonApiResponse).toHaveProperty('species');
    });
    it('response has sprites property', () => {
      expect(pokemonApiResponse).toHaveProperty('sprites', expect.any(Object));
    });
    it('response has stats property', () => {
      expect(pokemonApiResponse).toHaveProperty('stats');
    });
    it('response has types property', () => {
      expect(pokemonApiResponse).toHaveProperty('types');
    });
    it('response has weight property', () => {
      expect(pokemonApiResponse).toHaveProperty('weight', expect.any(Number));
    });
  });

  describe('Response with error', () => {
    let pokemonApiError = null;
    beforeAll(async done => {
      mockGetPokemonWithError(1);
      try {
        await getPokemon('butterfree');
      } catch (error) {
        pokemonApiError = error;
      }
      return done();
    });

    it('status is 503', () => {
      expect(pokemonApiError.response.status).toBe(503);
    });
    it('message is Service unavailable', () => {
      expect(pokemonApiError.response.data.message).toBe('Service unavailable');
    });
  });
});

describe('Pokemon Service GET /pokemon endpoint', () => {
  describe('Successful response', () => {
    let pokemonApiResponse = null;
    beforeAll(async done => {
      mockGetAllPokemons();
      pokemonApiResponse = await getAllPokemons();
      return done();
    });

    it('response has count property', () => {
      expect(pokemonApiResponse).toHaveProperty('count');
    });
    it('response has next property', () => {
      expect(pokemonApiResponse).toHaveProperty('next');
    });
    it('response has previous property', () => {
      expect(pokemonApiResponse).toHaveProperty('previous');
    });
    it('response has results property', () => {
      expect(pokemonApiResponse).toHaveProperty('results', expect.any(Array));
    });
    it('results elements have name property', () => {
      expect(pokemonApiResponse.results[0]).toHaveProperty('name', expect.any(String));
    });
    it('results elements have url property', () => {
      expect(pokemonApiResponse.results[0]).toHaveProperty('url');
    });
  });

  describe('Response with error', () => {
    let pokemonApiError = null;
    beforeAll(async done => {
      mockGetAllPokemonsWithError();
      try {
        await getAllPokemons();
      } catch (error) {
        pokemonApiError = error;
      }
      return done();
    });

    it('status is 503', () => {
      expect(pokemonApiError.response.status).toBe(503);
    });
    it('message is Service unavailable', () => {
      expect(pokemonApiError.response.data.message).toBe('Service unavailable');
    });
  });
});
