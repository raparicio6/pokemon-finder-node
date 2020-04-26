const pokemon = require('./pokemon');

module.exports = {
  ...pokemon,
  Error: {
    type: 'object',
    properties: {
      message: {
        type: 'string'
      },
      internalCode: {
        type: 'string'
      }
    }
  }
};
