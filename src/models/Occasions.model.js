const { Schema, model, Types } = require('mongoose');
const { COMMEMORATIVE_DATES } = require('../../utils/constants.util');

const occasionSchema = new Schema({
  occasion: { type: [String], enum: COMMEMORATIVE_DATES },
  recipes: { type: [Types.ObjectId], ref: 'Recipes' }
});

const Occasions = model('Occasion', occasionSchema);

module.exports = Occasions;
