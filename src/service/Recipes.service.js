const Recipes = require('../models/Recipes.model');
const BaseService = require('./Base.service');

class RecipesService extends BaseService {
  constructor() {
    super(Recipes)
  }
}

module.exports = new RecipesService();
