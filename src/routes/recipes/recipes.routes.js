const express = require('express');
const RecipesController = require('../../controller/recipes.controller');
const router = express();

router.post('/recipe', RecipesController.create);
router.patch('/recipe/:recipeId', RecipesController.update);

router.get('/recipes', RecipesController.getAll);
router.get('/recipes/name/:name', RecipesController.getByName);
router.get('/recipes/search', RecipesController.search);

module.exports = router;
