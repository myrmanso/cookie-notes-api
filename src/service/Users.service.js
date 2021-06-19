const Users = require('../models/Users.model');
const BaseService = require('./Base.service');

class UserService extends BaseService {
  constructor() {
    super(Users)
  }

  async searchUserFollowers(userId) {
    try {
      return (await this.searchById(userId)).followers;
    } catch (error) {
      console.log('BaseService.searchFollowers - error ', error)
    }
  }

  async searchUserFollowing(userId) {
    try {
      return (await this.searchById(userId)).following;
    } catch (error) {
      console.log('BaseService.searchUserFollowing - error ', error)
    }
  }

  async searchUserRecipes(userId) {
    try {
      return (await this.searchById(userId)).recipes;
    } catch (error) {
      console.log('BaseService.searchUserRecipes - error ', error)
    }
  }
}

module.exports = new UserService();
