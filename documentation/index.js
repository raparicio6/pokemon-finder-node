const config = require('../config');
const schemas = require('./schemas');
const paths = require('./paths');

const port = config.common.api.port || 8080;

module.exports = {
  openapi: '3.0.1',
  info: {
    version: '0.1.0',
    title: 'pokemon-finder-node',
    description: 'API to integrate with a Pokemon API',
    termsOfService: '',
    contact: {
      name: 'Rodrigo Aparicio',
      email: 'rodrigoaparicio6@gmail.com'
    },
    license: {
      name: 'MIT'
    }
  },
  servers: [
    {
      url: `http://localhost:${port}/`,
      description: 'Local server'
    }
  ],
  security: [],
  tags: [
    {
      name: 'GET'
    }
  ],
  paths,
  components: {
    schemas,
    securitySchemes: {}
  }
};
