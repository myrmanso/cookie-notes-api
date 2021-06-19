const Comments = require('../models/Comments.model');
const BaseService = require('./Base.service');

class CommentService extends BaseService {
  constructor() {
    super(Comments)
  }
}

module.exports = new CommentService();
