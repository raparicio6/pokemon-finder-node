module.exports = {
  '/pokemons': {
    get: {
      tags: ['GET'],
      description: 'Get pokemons',
      operationId: 'getPokemons',
      parameters: [
        {
          name: 'pokemonsNames',
          in: 'query',
          schema: {
            $ref: '#/components/schemas/pokemonsNames'
          },
          allowReserved: true,
          required: true
        }
      ],
      responses: {
        200: {
          description: 'Pokemons were obtained',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Pokemons'
              }
            }
          }
        },
        422: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Error'
              },
              example: {
                message: 'pokemonsNames has to be an array of strings.',
                internal_code: 'schema_error'
              }
            }
          }
        }
      }
    }
  },
  '/pokemons_names': {
    get: {
      tags: ['GET'],
      description: 'Get all pokemons hashed names',
      operationId: 'getAllPokemonsHashedNames',
      parameters: [],
      responses: {
        200: {
          description: 'All pokemons hashed names were obtained',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/HashedPokemonsNames'
              }
            }
          }
        }
      }
    }
  }
};
