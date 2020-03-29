const { healthCheck } = require('./controllers/healthCheck');
const { getPokemons, getAllPokemonsHashedNames } = require('./controllers/pokemons');
const { validateSchemaAndFail } = require('./middlewares/schemaValidator');
const { getPokemonsSchema } = require('./schemas/pokemons');

exports.init = app => {
  app.get('/health', healthCheck);
  app.get('/pokemons', validateSchemaAndFail(getPokemonsSchema), getPokemons);
  app.get('/pokemons_names', getAllPokemonsHashedNames);
};
