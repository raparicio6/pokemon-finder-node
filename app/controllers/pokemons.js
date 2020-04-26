const { getPokemon, getAllPokemons } = require('../services/pokemons');
const { formatPokemons, getHashedPokemonsNames } = require('../serializers/pokemons');

exports.getPokemons = (req, res, next) =>
  Promise.all(req.query.pokemonsNames.map(getPokemon))
    .then(pokemons => res.send(formatPokemons(pokemons)))
    .catch(next);

exports.getAllPokemonsHashedNames = (req, res, next) =>
  getAllPokemons()
    .then(({ results }) => res.send(getHashedPokemonsNames(results)))
    .catch(next);
