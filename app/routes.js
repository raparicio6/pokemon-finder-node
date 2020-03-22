const { healthCheck } = require('./controllers/healthCheck');
const { getPokemon } = require('./controllers/pokemons');

exports.init = app => {
  app.get('/health', healthCheck);
  app.get('/pokemons/:pokemonName', getPokemon);
};
