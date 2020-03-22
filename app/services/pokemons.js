const request = require('axios');

const {
  common: { pokemonApiBaseUrl }
} = require('../../config');
const { GET } = require('../constants');

exports.getPokemon = pokemonName => {
  const options = {
    method: GET,
    url: `${pokemonApiBaseUrl}/pokemon/${pokemonName}`
  };
  return request(options).then(res => res.data);
};
