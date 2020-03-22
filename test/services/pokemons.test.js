const nock = require('nock');

const { getPokemon } = require('../../app/services/pokemons');
const {
  common: { pokemonApiBaseUrl }
} = require('../../config');
const { properResponse, responseWithError } = require('../schemas/pokemonServiceSchemas');

describe('Pokemon Service GET /pokemon/:pokemonName endpoint', () => {
  describe('Get fields correctly', () => {
    let pokemonApiResponse = null;
    beforeAll(async done => {
      nock(`${pokemonApiBaseUrl}`)
        .get(/pokemon\/([^\s]+)/)
        .reply(200, properResponse);

      pokemonApiResponse = await getPokemon('butterfree');
      return done();
    });

    it('gets abilities field correctly', () => {
      expect(pokemonApiResponse).toHaveProperty('abilities');
    });
    it('gets base_experience field correctly', () => {
      expect(pokemonApiResponse).toHaveProperty('base_experience');
    });
    it('gets forms field correctly', () => {
      expect(pokemonApiResponse).toHaveProperty('forms');
    });
    it('gets game_indices field correctly', () => {
      expect(pokemonApiResponse).toHaveProperty('game_indices');
    });
    it('gets height field correctly', () => {
      expect(pokemonApiResponse).toHaveProperty('height');
    });
    it('gets held_items field correctly', () => {
      expect(pokemonApiResponse).toHaveProperty('held_items');
    });
    it('gets id field correctly', () => {
      expect(pokemonApiResponse).toHaveProperty('id');
    });
    it('gets is_default field correctly', () => {
      expect(pokemonApiResponse).toHaveProperty('is_default');
    });
    it('gets location_area_encounters field correctly', () => {
      expect(pokemonApiResponse).toHaveProperty('location_area_encounters');
    });
    it('gets moves field correctly', () => {
      expect(pokemonApiResponse).toHaveProperty('moves');
    });
    it('gets name field correctly', () => {
      expect(pokemonApiResponse).toHaveProperty('name');
    });
    it('gets order field correctly', () => {
      expect(pokemonApiResponse).toHaveProperty('order');
    });
    it('gets species field correctly', () => {
      expect(pokemonApiResponse).toHaveProperty('species');
    });
    it('gets sprites field correctly', () => {
      expect(pokemonApiResponse).toHaveProperty('sprites');
    });
    it('gets stats field correctly', () => {
      expect(pokemonApiResponse).toHaveProperty('stats');
    });
    it('gets types field correctly', () => {
      expect(pokemonApiResponse).toHaveProperty('types');
    });
    it('gets weight field correctly', () => {
      expect(pokemonApiResponse).toHaveProperty('weight');
    });
  });

  describe('Service respond with error', () => {
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
