const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {type: String}
});


const RecipeSchema = new Schema({
    username: {type: String},
    description: {type: String},
    date: {type: Date, defaultTo: Date()},
});

module.exports = {
    User: mongoose.model('User', UserSchema),
    Recipe: mongoose.model('Recipe', RecipeSchema)
}