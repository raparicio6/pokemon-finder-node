const nock = require('nock');

const { getPokemon } = require('../../app/services/pokemons');
const {
  common: { pokemonApiBaseUrl }
} = require('../../config');
const { properResponse, responseWithError } = require('../schemas/pokemonServiceSchemas');

describe('Pokemon Service GET /pokemon/:pokemonName endpoint', () => {
  describe('Successful response', () => {
    let pokemonApiResponse = null;
    beforeAll(async done => {
      nock(`${pokemonApiBaseUrl}`)
        .get(/pokemon\/([^\s]+)/)
        .reply(200, properResponse);

      pokemonApiResponse = await getPokemon('butterfree');
      return done();
    });

    it('response has abilities property', () => {
      expect(pokemonApiResponse).toHaveProperty('abilities');
    });
    it('response has base_experience property', () => {
      expect(pokemonApiResponse).toHaveProperty('base_experience');
    });
    it('response has forms property', () => {
      expect(pokemonApiResponse).toHaveProperty('forms');
    });
    it('response has game_indices property', () => {
      expect(pokemonApiResponse).toHaveProperty('game_indices');
    });
    it('response has height property', () => {
      expect(pokemonApiResponse).toHaveProperty('height');
    });
    it('response has held_items property', () => {
      expect(pokemonApiResponse).toHaveProperty('held_items');
    });
    it('response has id property', () => {
      expect(pokemonApiResponse).toHaveProperty('id');
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
      expect(pokemonApiResponse).toHaveProperty('name');
    });
    it('response has order property', () => {
      expect(pokemonApiResponse).toHaveProperty('order');
    });
    it('response has species property', () => {
      expect(pokemonApiResponse).toHaveProperty('species');
    });
    it('response has sprites property', () => {
      expect(pokemonApiResponse).toHaveProperty('sprites');
    });
    it('response has stats property', () => {
      expect(pokemonApiResponse).toHaveProperty('stats');
    });
    it('response has types property', () => {
      expect(pokemonApiResponse).toHaveProperty('types');
    });
    it('response has weight property', () => {
      expect(pokemonApiResponse).toHaveProperty('weight');
    });
  });

  describe('Response with error', () => {
    let pokemonApiError = null;
    beforeAll(async done => {
      nock(`${pokemonApiBaseUrl}`)
        .get(/pokemon\/([^\s]+)/)
        .reply(503, responseWithError);

      try {
        await getPokemon('butterfree');
      } catch (error) {
        pokemonApiError = error;
      }
      return done();
    });

    it('status is 503', () => {
      expect(pokemonApiError.statusCode).toBe(503);
    });
    it('message is Service Unavailable', () => {
      expect(pokemonApiError.message).toBe('Service Unavailable');
    });
    it('origin is Pokemon', () => {
      expect(pokemonApiError.origin).toBe('Pokemon');
    });
  });
});
