const Users = require('../models/Users.model');
const BaseService = require('./Base.service');

class UserService extends BaseService {
  constructor() {
    super(Users)
  }

  searchUserFollowers = async (userId) => {
    try {
      return (await this.searchById(userId)).followers;
    } catch (error) {
      console.log('BaseService.searchFollowers - error ', error)
    }
  }

  searchUserFollowing = async (userId) => {
    try {
      return (await this.searchById(userId)).following;
    } catch (error) {
      console.log('BaseService.searchUserFollowing - error ', error)
    }
  }

  searchUserById = async (userId) => {
    try {
      return await this.searchById(userId);
    } catch (error) {
      console.log('BaseService.searchUserRecipes - error ', error)
    }
  }
  searchUserRecipes = async (userId) => {
    try {
      return (await this.searchUserById(userId)).recipes;
    } catch (error) {
      console.log('BaseService.searchUserRecipes - error ', error)
    }
  }
}

module.exports = new UserService();
