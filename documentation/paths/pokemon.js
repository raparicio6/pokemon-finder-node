module.exports = {
  '/pokemons/{pokemonName}': {
    get: {
      tags: ['GET'],
      description: 'Get pokemon',
      operationId: 'getPokemon',
      parameters: [
        {
          name: 'pokemonName',
          in: 'path',
          schema: {
            $ref: '#/components/schemas/name'
          },
          required: true
        }
      ],
      responses: {
        200: {
          description: 'Pokemon was obtained',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Pokemon'
              }
            }
          }
        }
      }
    }
  },
  '/pokemons': {
    get: {
      tags: ['GET'],
      description: 'Get pokemons hashed names',
      operationId: 'getPokemonsHashedNames',
      parameters: [],
      responses: {
        200: {
          description: 'Pokemons hashed names were obtained',
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
