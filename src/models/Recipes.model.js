const { Schema, model, Types } = require('mongoose');

const recipeType = require('./typesModel/recipe.type');
const flavorType = require('./typesModel/flavor.type');
const { MEALS, BASED_PLANTS, COST, LEVEL, COMMEMORATIVE_DATES } = require('../../utils/constants.util');

const recipeSchema = new Schema({
  name: { type: String, required: true },
  level: { type: String, enum: LEVEL },
  occasion: { type: [String], enum: COMMEMORATIVE_DATES },
  description: { type: String },
  externalLink: { type: String },
  recipe: { type: [Object], recipeType },
  role: { type: String, enum: ['public', 'private'], default: 'public' },
  meals: { type: String, enum: MEALS, required: true },
  flavor: { type: [Object], flavorType },
  basedPlants: { type: String, enum: BASED_PLANTS },
  cost: { type: String, enum: COST },
  userCreator: { type: Types.ObjectId, ref: 'Users' },
  users: { type: [Types.ObjectId], ref: 'Users' },
  numberLikes: { type: Number, default: 0 },
  numberComments: { type: Number, default: 0 }
},
  {
    timestamps: true,
  }
);

const Recipes = model('Recipes', recipeSchema);

module.exports = Recipes;
