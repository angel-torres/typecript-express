const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    username: { type: String },
    password: { type: String },
});
const RecipeSchema = new Schema({
    title: { type: String },
    username: { type: String },
    description: { type: String },
    ingredients: { type: Array },
    date: { type: Date, defaultTo: Date() },
});
module.exports = {
    User: mongoose.model('User', UserSchema),
    Recipe: mongoose.model('Recipe', RecipeSchema)
};
//# sourceMappingURL=Schemas.js.map