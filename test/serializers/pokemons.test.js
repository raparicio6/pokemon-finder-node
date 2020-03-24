const { formatPokemon, getHashedPokemonsNames } = require('../../app/serializers/pokemons');
const {
  properGetPokemonResponse,
  properGetAllPokemonsResponse
} = require('../schemas/pokemonServiceSchemas');
const hashedPokemonsNamesSchema = require('../schemas/hashedPokemonsNamesSchema');

describe('formatPokemon', () => {
  let formattedPokemon = null;
  beforeAll(done => {
    formattedPokemon = formatPokemon(properGetPokemonResponse);
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

describe('getHashedPokemonsNames', () => {
  let hashedPokemonsNames = null;
  beforeAll(done => {
    hashedPokemonsNames = getHashedPokemonsNames(properGetAllPokemonsResponse.results);
    return done();
  });

  it('hashedPokemonsNames has characters as keys, a character as the value of each key, and an array as value of each of this last key', () => {
    expect(hashedPokemonsNames).toMatchObject(hashedPokemonsNamesSchema);
  });
});
