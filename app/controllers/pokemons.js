const { getPokemon, getAllPokemons, SERVICE_NAME: POKEMON_SERVICE_NAME } = require('../services/pokemons');
const { serializePokemons, getHashedPokemonsNames } = require('../serializers/pokemons');
const errors = require('../errors');
const logger = require('../logger');

const handleErrorFromService = (error, next, textToLog) => {
  const errorData = error.response.data;
  const statusCode = error.response.status;
  logger.error(`${textToLog}. Error: ${JSON.stringify(errorData)} with status ${statusCode}`);
  return next(errors.externalApiError(statusCode, errorData.message, POKEMON_SERVICE_NAME));
};

exports.getPokemons = (req, res, next) =>
  Promise.all(req.query.pokemonsNames.map(getPokemon))
    .then(pokemons => res.send(serializePokemons(pokemons)))
    .catch(error => handleErrorFromService(error, next, `Could not get pokemons ${req.query.pokemonsNames}`));

exports.getAllPokemonsHashedNames = (req, res, next) =>
  getAllPokemons()
    .then(({ results }) => res.send(getHashedPokemonsNames(results)))
    .catch(error => handleErrorFromService(error, next, 'Could not get all pokemons'));
