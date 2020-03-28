exports.getPokemonsSchema = {
  pokemonsNames: {
    in: ['query'],
    isArray: {
      errorMessage: 'pokemonsNames has to be an array of strings.'
    },
    optional: false
  },
  'pokemonsNames.*': {
    custom: {
      options: value => isNaN(value)
    },
    errorMessage: 'pokemonsNames has to be an array of strings.',
    optional: false
  }
};
