var express = require('express');
var router = express.Router();
const database = require('../../../config.js');
const vocab = require('../../../models/vocab');
const { check, validationResult } = require('express-validator');
var cors = require('cors')

router.get('/', cors(), (request, response) => {
  database('vocab').select()
    .then((vocab) => {
      response.status(200).json(vocab);
    })
    .catch((error) => {
      response.status(500).json({ error });
    });
});

router.post('/', cors(), [
  check('term').not().isEmpty().withMessage('The vocab term is required'),
  check('meaning').not().isEmpty().withMessage('The vocab meaning is required'),
  check('category').isIn(['Ruby/Ruby on Rails', 'JavaScript', 'Python', 'SQL', 'Other'])
], (request, response) => {
  const errors = validationResult(request)
  if (!errors.isEmpty()) {
    return response.status(422).json({ errors: errors.array() })
  }

  vocab.addVocab(request.body)
    .then(res => response.status(201).send({ message: `${request.body.term} has been added to your vocab!`}))
    .catch(error => response.status(500).send(error));
})

// return response.status(400).send({message: 'There are some missing attributes in your request parameters.'});

module.exports = router;
