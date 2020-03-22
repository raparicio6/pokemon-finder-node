const nock = require('nock');

const { getPokemon } = require('../../app/services/pokemons');
const {
  common: { pokemonApiBaseUrl }
} = require('../../config');
const pokemonServiceResponseSchema = require('../schemas/pokemonServiceResponseSchema');

describe('pokemon service GET /pokemon/:pokemonName endpoint', () => {
  let pokemonApiResponse = null;
  beforeAll(async done => {
    nock(`${pokemonApiBaseUrl}`)
      .get(/pokemon\/([^\s]+)/)
      .reply(200, pokemonServiceResponseSchema);

    pokemonApiResponse = await getPokemon('butterfree');
    return done();
  });

  describe('Get fields correctly', () => {
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
});
