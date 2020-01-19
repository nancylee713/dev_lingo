# Dev Lingo
Dev Lingo is a Node API, in which a user can add a new lingo by filling in the form on the frontend; the user can also retrieve a list of all words in JSON by appending `/api/v1/vocab` to the root url of the website (click [here](https://dev-lingo.herokuapp.com/) to see demo). Currently, the app is functional, but the CRUD functionalities have not been fully implemented yet.


### Getting started
1. First `fork` this repo and clone down your version of this repo.
2. Then, run the following command in your terminal to get started.

```
npm install
```

3. Set up your local database, like `dev_lingo_dev`. In this project, Postgres is used (see `knexfile.js` to modify db configs).  
4. Once you have your database setup, you’ll need to run some migrations for both development and testing environments.

```
knex migrate:latest
knex migrate:latest --env test
```

### Running your tests
Jest is used for testing in this project. To run all tests, simply run the following command:

```
npm test
```

### Tech Stack List
```
node 10.16.3
Knex CLI version: 0.20.7
PostgreSQL 11.5
```

### How to Contribute
If you'd like to contribute to this project (i.e., adding new lingo or any CRUD or analytic endpoints, fixing bugs, switching to mobile app, etc), simply fork this repo, clone it to your local machine, and follow the setup instructions described above. Then push any changes back to your repo, and open a new pull request.
