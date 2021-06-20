const RecipesService = require("../service/Recipes.service");
const UsersService = require("../service/Users.service");

class RecipesController {

  getAll = async (req, res) => {
    try {
      const recipes = await RecipesService.searchAll();

      res.status(200).json(recipes);
    } catch (error) {
      console.log('RecipesController.getAll - error ', error)
    }
  }

  getByName = async (req, res) => {
    try {
      const { name } = req.params;
      const recipes = await RecipesService.searchRecipeByName(name)

      res.status(200).json(recipes);
    } catch (error) {
      console.log('RecipesController.getByName - error ', error)
    }
  }

  search = async (req, res) => {
    try {
      const { query } = req;
      const result = await RecipesService.searchRecipe(query)

      res.status(200).json(result)
    } catch (error) {
      console.log('RecipesController.filterRecipes - error ', error)
    }
  }

  create = async (req, res) => {
    try {
      const { body } = req;
      const { userCreator } = body;

      const result = await RecipesService.create(body)
      await UsersService.update(userCreator, { recipes: result._id })

      res.status(200).json(result)
    } catch (error) {
      console.log('RecipesController.filterRecipes - error ', error)
    }
  }

  update = async (req, res) => {
    try {
      const { body, params: { recipeId } } = req;

      const result = await RecipesService.update(recipeId, body)

      res.status(200).json(result)
    } catch (error) {
      console.log('RecipesController.filterRecipes - error ', error)
    }
  }
}

module.exports = new RecipesController();
