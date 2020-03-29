module.exports = {
  id: {
    type: 'number',
    example: 1
  },
  name: {
    type: 'string',
    example: 'pikachu'
  },
  pokemonsNames: {
    type: 'array',
    items: {
      $ref: '#/components/schemas/name'
    }
  },
  weight: {
    type: 'number',
    example: 20
  },
  height: {
    type: 'number',
    example: 111
  },
  baseExperience: {
    type: 'number',
    example: 164
  },
  imageUrl: {
    type: 'string',
    example: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
    description: 'Url with the image of the pokemon'
  },
  bulbasaur: {
    type: 'string',
    example: 'bulbasaur'
  },
  blastoise: {
    type: 'string',
    example: 'blastoise'
  },
  ivysaur: {
    type: 'string',
    example: 'ivysaur'
  },
  Pokemon: {
    type: 'object',
    properties: {
      id: {
        $ref: '#/components/schemas/id'
      },
      name: {
        $ref: '#/components/schemas/name'
      },
      weight: {
        $ref: '#/components/schemas/weight'
      },
      height: {
        $ref: '#/components/schemas/height'
      },
      baseExperience: {
        $ref: '#/components/schemas/baseExperience'
      },
      imageUrl: {
        $ref: '#/components/schemas/imageUrl'
      }
    }
  },
  Pokemons: {
    type: 'object',
    properties: {
      pokemons: {
        type: 'array',
        items: {
          $ref: '#/components/schemas/Pokemon'
        }
      }
    }
  },
  HashedPokemonsNames: {
    type: 'object',
    properties: {
      b: {
        type: 'object',
        properties: {
          u: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/bulbasaur'
            }
          },
          l: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/blastoise'
            }
          }
        }
      },
      i: {
        type: 'object',
        properties: {
          v: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/ivysaur'
            }
          }
        }
      }
    }
  }
};
