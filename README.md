# Pokemon finder

[![Build Status](https://circleci.com/gh/raparicio6/pokemon-finder-node.svg?style=shield)](https://circleci.com/gh/raparicio6/pokemon-finder-node)
[![Coverage Status](https://coveralls.io/repos/github/raparicio6/pokemon-finder-node/badge.svg?branch=master)](https://coveralls.io/github/raparicio6/pokemon-finder-node?branch=master)

&nbsp;
**Be a pokemon master!**

<img alt="Pokeball" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/601px-Pokebola-pokeball-png-0.png" height="200" width="200">

&nbsp;
## Getting Started

### Installing

Get the latest version of node from the [official website](https://nodejs.org/) or using [nvm](https://github.com/creationix/nvm).  
Nvm approach is preferred.

Install dependencies by running `npm i`.

Create a *.env* file at the root of the project and add:  
`POKEMON_API_BASE_URL=https://pokeapi.co/api/v2`

This project has its corresponding [frontend](https://github.com/raparicio6/pokemon-finder-react).

#### Starting app

We have two ways to start the app. To start it in production mode run `npm start` in the root path of the project. To start it in development mode (nodemon) run `npm run start-dev`. Then access the app at **localhost:port**. The port is logged in the console where you run the start script.

### Development

#### Environments

By default, the environment will be **development**, but you can easily change it using the **NODE_ENV** environmental variable.

#### Environment variables

`Dotenv` is used for managing environment variables. They are stored in the `/.env` file. Take into account that the variables defined in the `bashrc` are not overrided.

The environment variables should be added to the `.env` file in the form of `NAME=VALUE`, as the following example:

```
PORT=8081
CLIENTS_API=http://api.clients.example.org/
```

**Remember not to push nor commit the `.env` file.**

#### Testing

In order to execute the tests run `npm test`.  
[Jest](https://jestjs.io/) was used as the testing framework.

#### Documentation

Documentation will be served at `/docs`. It is suggested to check it if you want to execute any request since it contains a **Try Out** option, which is much more comfortable than using other tools such as Postman.  
The project uses [OpenAPI](https://github.com/OAI/OpenAPI-Specification) A.K.A `Swagger`. Check [this link](https://medium.com/wolox-driving-innovation/documenting-a-nodejs-rest-api-with-openapi-3-swagger-5deee9f50420) for more details on how to use it.

## Built With

* [Express.js](https://expressjs.com/)
* [CircleCI](https://circleci.com/)

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Run the tests (`npm test`)
4. Commit your changes (`git commit -am 'Add some feature'`)
5. Push to the branch (`git push origin my-new-feature`)
6. Create new Pull Request

## About

This project was written and is maintained by [Rodrigo Aparicio](https://github.com/raparicio6).

## License

This project is licensed under the MIT License.

&nbsp;
<img alt="Badges" src="https://i.ya-webdesign.com/images/pokemon-badge-png-1.png" height="200" width="500">