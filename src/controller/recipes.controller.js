const RecipesService = require("../service/Recipes.service");
const UsersService = require("../service/Users.service");

const helperAvailableFilters = require("./helper/availableFilters.helper");
class RecipesController {

  _builderResponse = async (results) => {
    const recipesData = await Promise.all(results.map(async result => {
      const user = await UsersService.searchById(result.userCreator);

      const data = {
        recipeId: result.id,
        recipeName: result.name,
      };

      if (result.externalLink) data.externalLink = result.externalLink;
      if (result.recipe.length) data.recipe = result.recipe;

      data.userCreator = {
        id: result.userCreator,
        userName: user.name
      }

      return data;
    }))

    return {
      paging: {
        total: recipesData.length
      },
      recipes: recipesData,
      availableFilters: helperAvailableFilters.recipes,
    }
  }

  getByUserId = async (req, res) => {
    try {
      const { userId } = req.params;

      const recipes = await UsersService.searchUserRecipes(userId);

      const results = await Promise.all(recipes.map(recipe => RecipesService.searchById(recipe)));

      const response = await this._builderResponse(results);

      res.status(200).json(response);
    } catch (error) {
      console.log('RecipesController.getById - error ', error)
    }
  }

  getAll = async (req, res) => {
    try {
      const results = await RecipesService.searchAll();

      const response = await this._builderResponse(results);

      res.status(200).json(response);
    } catch (error) {
      console.log('RecipesController.getAll - error ', error)
    }
  }

  getByName = async (req, res) => {
    try {
      const { name } = req.params;
      const results = await RecipesService.searchRecipeByName(name);

      const response = await this._builderResponse(results);

      res.status(200).json(response);
    } catch (error) {
      console.log('RecipesController.getByName - error ', error)
    }
  }

  search = async (req, res) => {
    try {
      const { query } = req;
      const results = await RecipesService.searchRecipe(query)

      const response = await this._builderResponse(results);

      res.status(200).json(response)
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
