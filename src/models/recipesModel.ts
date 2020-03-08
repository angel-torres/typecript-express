const mongoose = require('mongoose');

const RecipeSchema = mongoose.Schema({
  title: { type: String },
  description: { type: String },
  ingredients: { type: Array },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Recipe', RecipeSchema);