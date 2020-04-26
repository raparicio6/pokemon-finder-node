const nock = require('nock');
const pokemonServiceSchemas = require('./schemas/pokemonServiceSchemas');
const {
  common: { pokemonApiBaseUrl }
} = require('../../config');

exports.mockGetPokemon = pokemonName =>
  nock(`${pokemonApiBaseUrl}`)
    .get(`/pokemon/${pokemonName.toLowerCase()}`)
    .reply(200, pokemonServiceSchemas[`properGetPokemonResp${pokemonName}`]);

exports.mockGetPokemonWithError = (times = 1) =>
  nock(`${pokemonApiBaseUrl}`)
    .get(/pokemon\/([^\s]+)/)
    .times(times)
    .reply(503, pokemonServiceSchemas.responseWithError);

exports.mockGetAllPokemons = () =>
  nock(`${pokemonApiBaseUrl}`)
    .get(/pokemon/)
    .reply(200, pokemonServiceSchemas.properGetAllPokemonsResponse);

exports.mockGetAllPokemonsWithError = () =>
  nock(`${pokemonApiBaseUrl}`)
    .get(/pokemon/)
    .reply(503, pokemonServiceSchemas.responseWithError);
