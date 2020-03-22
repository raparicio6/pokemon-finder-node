const { getPokemon } = require('../services/pokemons');

exports.getPokemon = (req, res) => getPokemon(req.params.pokemonName).then(pokemon => res.send({ pokemon }));
