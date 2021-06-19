const Likes = require('../models/Likes.model');
const BaseService = require('./Base.service');

class LikeService extends BaseService {
  constructor() {
    super(Likes)
  }
}

module.exports = new LikeService();
