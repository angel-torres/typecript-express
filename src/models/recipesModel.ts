const mongoose = require('mongoose');

const RecipeSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    ingredients: { type: Array },
    date: { type: Date, default: Date.now },
  });

module.exports = mongoose.model('Recipe', RecipeSchema);