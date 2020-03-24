const request = require('axios');

const {
  common: { pokemonApiBaseUrl }
} = require('../../config');
const { GET, POKEMONS_FETCHING_LIMIT } = require('../constants');
const logger = require('../logger');
const errors = require('../errors');

exports.getPokemon = pokemonName => {
  const options = {
    method: GET,
    url: `${pokemonApiBaseUrl}/pokemon/${pokemonName}`
  };
  return request(options)
    .then(response => response.data)
    .catch(error => {
      logger.error(error.toJSON());
      throw errors.externalApiError(error.response.data, 'Pokemon');
    });
};

exports.getAllPokemons = () => {
  const options = {
    method: GET,
    url: `${pokemonApiBaseUrl}/pokemon`,
    params: {
      limit: POKEMONS_FETCHING_LIMIT
    }
  };
  return request(options)
    .then(response => response.data)
    .catch(error => {
      logger.error(error.toJSON());
      throw errors.externalApiError(error.response.data, 'Pokemon');
    });
};
