const { getPokemon } = require('../services/pokemons');
const { formatPokemon } = require('../serializers/pokemons');

exports.getPokemon = (req, res, next) =>
  getPokemon(req.params.pokemonName)
    .then(pokemon => res.send(formatPokemon(pokemon)))
    .catch(next);
