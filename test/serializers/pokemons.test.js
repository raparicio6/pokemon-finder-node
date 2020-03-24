const { formatPokemon } = require('../../app/serializers/pokemons');
const { properResponse } = require('../schemas/pokemonServiceSchemas');

describe('formatPokemon', () => {
  let formattedPokemon = null;
  beforeAll(done => {
    formattedPokemon = formatPokemon(properResponse);
    return done();
  });

  it('formattedPokemon has pokemon property', () => {
    expect(formattedPokemon).toHaveProperty('pokemon');
  });
  it('formattedPokemon has id property', () => {
    expect(formattedPokemon.pokemon).toHaveProperty('id');
  });
  it('formattedPokemon has name property', () => {
    expect(formattedPokemon.pokemon).toHaveProperty('name');
  });
  it('formattedPokemon has weight property', () => {
    expect(formattedPokemon.pokemon).toHaveProperty('weight');
  });
  it('formattedPokemon has height property', () => {
    expect(formattedPokemon.pokemon).toHaveProperty('height');
  });
  it('formattedPokemon has baseExperience property', () => {
    expect(formattedPokemon.pokemon).toHaveProperty('baseExperience');
  });
  it('formattedPokemon has imageUrl property', () => {
    expect(formattedPokemon.pokemon).toHaveProperty('imageUrl');
  });
});
