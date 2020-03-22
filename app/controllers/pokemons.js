const { getPokemon } = require('../services/pokemons');

exports.getPokemon = (req, res, next) =>
  getPokemon(req.params.pokemonName)
    .then(pokemon => res.send({ pokemon }))
    .catch(next);
