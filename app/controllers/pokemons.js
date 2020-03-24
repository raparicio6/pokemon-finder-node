const { getPokemon, getAllPokemons } = require('../services/pokemons');
const { formatPokemon, getHashedPokemonsNames } = require('../serializers/pokemons');

exports.getPokemon = (req, res, next) =>
  getPokemon(req.params.pokemonName)
    .then(pokemon => res.send(formatPokemon(pokemon)))
    .catch(next);

exports.getAllPokemons = (req, res, next) =>
  getAllPokemons()
    .then(({ results }) => res.send(getHashedPokemonsNames(results)))
    .catch(next);
