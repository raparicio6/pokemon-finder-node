const { formatPokemons, getHashedPokemonsNames } = require('../../app/serializers/pokemons');
const {
  properGetPokemonResponse,
  properGetAllPokemonsResponse
} = require('../schemas/pokemonServiceSchemas');
const hashedPokemonsNamesSchema = require('../schemas/hashedPokemonsNamesSchema');

describe('formatPokemons', () => {
  let formattedPokemons = null;
  beforeAll(done => {
    formattedPokemons = formatPokemons([properGetPokemonResponse]);
    return done();
  });

  it('formattedPokemons has pokemons property', () => {
    expect(formattedPokemons).toHaveProperty('pokemons');
  });
  it('pokemons property is an array', () => {
    expect(Array.isArray(formattedPokemons.pokemons)).toBe(true);
  });
  it('formattedPokemon has id property', () => {
    expect(formattedPokemons.pokemons[0]).toHaveProperty('id');
  });
  it('formattedPokemon has name property', () => {
    expect(formattedPokemons.pokemons[0]).toHaveProperty('name');
  });
  it('formattedPokemon has weight property', () => {
    expect(formattedPokemons.pokemons[0]).toHaveProperty('weight');
  });
  it('formattedPokemon has height property', () => {
    expect(formattedPokemons.pokemons[0]).toHaveProperty('height');
  });
  it('formattedPokemon has baseExperience property', () => {
    expect(formattedPokemons.pokemons[0]).toHaveProperty('baseExperience');
  });
  it('formattedPokemon has imageUrl property', () => {
    expect(formattedPokemons.pokemons[0]).toHaveProperty('imageUrl');
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
