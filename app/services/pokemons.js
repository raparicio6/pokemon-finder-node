const request = require('axios');

const {
  common: { pokemonApiBaseUrl }
} = require('../../config');
const { GET } = require('../constants');
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
