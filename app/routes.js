const { healthCheck } = require('./controllers/healthCheck');
const { getPokemons, getAllPokemonsNames } = require('./controllers/pokemons');

exports.init = app => {
  app.get('/health', healthCheck);
  app.get('/pokemons', getPokemons);
  app.get('/pokemons_names', getAllPokemonsNames);
};
