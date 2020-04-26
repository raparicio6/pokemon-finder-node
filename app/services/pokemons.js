const request = require('axios');
const {
  common: { pokemonApiBaseUrl }
} = require('../../config');
const { GET, POKEMONS_FETCHING_LIMIT } = require('../constants');

exports.SERVICE_NAME = 'Pokemon service';

exports.getPokemon = pokemonName => {
  const options = {
    method: GET,
    url: `${pokemonApiBaseUrl}/pokemon/${pokemonName}`
  };
  return request(options).then(response => response.data);
};

exports.getAllPokemons = () => {
  const options = {
    method: GET,
    url: `${pokemonApiBaseUrl}/pokemon`,
    params: {
      limit: POKEMONS_FETCHING_LIMIT
    }
  };
  return request(options).then(response => response.data);
};
