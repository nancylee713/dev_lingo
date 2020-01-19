const db = require('../config.js');

class Vocab {
  static addVocab(vocab) {
    return db('vocab').insert({
      term: vocab.term,
      meaning: vocab.meaning,
      category: vocab.category,
      references: vocab.references
    }, "id")
  }
}

module.exports = Vocab;
