var express = require('express');
var router = express.Router();
const database = require('../../../config.js');

router.get('/', (request, response) => {
  database('vocab').select()
    .then((vocab) => {
      response.status(200).json(vocab);
    })
    .catch((error) => {
      response.status(500).json({ error });
    });
});

module.exports = router;
