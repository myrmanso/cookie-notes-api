const express = require('express');
const UserService = require('../../service/Users.service');
const RecipesController = require('../../controller/recipes.controller');

const router = express();

router.get('/:userId/recipes', RecipesController.getByUserId);
router.get('/recipes/search', RecipesController.search);

module.exports = router;
