exports.formatPokemon = ({ id, name, base_experience, weight, height, sprites }) => ({
  pokemon: {
    id,
    name,
    weight,
    height,
    baseExperience: base_experience,
    imageUrl: sprites.front_default
  }
});

exports.getHashedPokemonsNames = results => {
  const hashedPokemonsNames = {};
  results
    .map(pokemon => pokemon.name)
    .forEach(pokemonName => {
      const firstCharacter = pokemonName[0];
      const secondCharacter = pokemonName[1];

      if (!(firstCharacter in hashedPokemonsNames)) {
        hashedPokemonsNames[firstCharacter] = {};
      }
      if (!(secondCharacter in hashedPokemonsNames[firstCharacter])) {
        hashedPokemonsNames[firstCharacter] = {
          ...hashedPokemonsNames[firstCharacter],
          [secondCharacter]: []
        };
      }

      hashedPokemonsNames[firstCharacter][secondCharacter].push(pokemonName);
    });
  return hashedPokemonsNames;
};
