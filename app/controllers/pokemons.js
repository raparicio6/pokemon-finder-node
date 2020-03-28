const { getPokemon, getAllPokemons } = require('../services/pokemons');
const { formatPokemons, getHashedPokemonsNames } = require('../serializers/pokemons');

// validar que me pasan pokemonsNames
exports.getPokemons = (req, res, next) => {
  Promise.all(req.query.pokemonsNames.map(getPokemon))
    .then(pokemons => res.send(formatPokemons(pokemons)))
    .catch(next);
};

exports.getAllPokemonsNames = (req, res, next) =>
  getAllPokemons()
    .then(({ results }) => res.send(getHashedPokemonsNames(results)))
    .catch(next);
