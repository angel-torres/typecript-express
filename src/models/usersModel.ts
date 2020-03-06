const mongoose = require('mongoose');

const JournalSchema = mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    date: { type: Date, default: Date.now },
  });

module.exports = mongoose.model('Journal', JournalSchema);