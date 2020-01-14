var shell = require('shelljs');
var request = require("supertest");
var app = require('../app');

const environment = process.env.NODE_ENV || 'test';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);


describe('Test get vocab path', () => {
  beforeEach(async () => {
    await database.raw('truncate table vocab cascade');

    let word = {
      term: 'some word',
      meaning: 'meaning',
      category: 'test',
      etc: 'etc'
    };
    await database('vocab').insert(word, 'id');
  });

  afterEach(() => {
    database.raw('truncate table vocab cascade');
  });

  describe('test GET vocab', () => {
    it('happy path', async () => {
      const res = await request(app)
        .get("/api/v1/vocab");

      expect(res.statusCode).toBe(200);
      expect(res.body.length).toBe(1);

      expect(res.body[0]).toHaveProperty('term');
      expect(res.body[0].term).toEqual('some word');

      expect(res.body[0]).toHaveProperty('meaning');
      expect(res.body[0].meaning).toEqual('meaning');

      expect(res.body[0]).toHaveProperty('category');
      expect(res.body[0].category).toEqual('test');

      expect(res.body[0]).toHaveProperty('etc');
      expect(res.body[0].etc).toEqual('etc');
    });
  });
});
