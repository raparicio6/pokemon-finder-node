exports.serializePokemons = pokemons => ({
  pokemons: pokemons.map(({ id, name, base_experience, weight, height, sprites }) => ({
    id,
    name,
    weight,
    height,
    baseExperience: base_experience,
    imageUrl: sprites.front_default
  }))
});

exports.getHashedPokemonsNames = results =>
  results.reduce((hashedPokemonsNames, { name }) => {
    const firstCharacter = name[0];
    const secondCharacter = name[1];

    if (!(firstCharacter in hashedPokemonsNames)) {
      hashedPokemonsNames[firstCharacter] = {};
    }
    if (!(secondCharacter in hashedPokemonsNames[firstCharacter])) {
      hashedPokemonsNames[firstCharacter] = {
        ...hashedPokemonsNames[firstCharacter],
        [secondCharacter]: []
      };
    }

    hashedPokemonsNames[firstCharacter][secondCharacter].push(name);
    return hashedPokemonsNames;
  }, {});
