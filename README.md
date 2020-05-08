# node-api

This is a starter template for api node projects.

## How to use it

Required:

-   nodejs
-   mySQL

```bash
# init project
$ cd test_keiron_node_api/
$ npm install

# configure files
  .env
  database/database.json

# run migrate and seed `sequelize`:
$ ./node_modules/.bin/sequelize db:create #create database
$ ./node_modules/.bin/sequelize db:migrate #run migrate
$ ./node_modules/.bin/sequelize db:seed:all #run seeders

- or -

npx sequelize-cli db:create #create database
npx sequelize-cli db:migrate #run migrate
npx sequelize-cli db:seed:all #run seeders

# up server at localhost:8000
$ npm start
```

start server [http://localhost:8000/api](http://localhost:8000/api)

```bash
- versions used: (Node: 12.16.0, NPM: 6.13.4, CLI: 5.5.1, ORM: 5.21.7)
```

## Authors

Developed by [Daniel Jara Pezzuoli](http://dpezz.me).
For help, please contact the [mail](mailto:jara.pezzuoli@gmail.com).

:-)
