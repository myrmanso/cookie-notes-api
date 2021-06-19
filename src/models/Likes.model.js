const { Schema, model, Types } = require('mongoose');

const likeSchema = new Schema({
  recipe: { type: Types.ObjectId, ref: 'Recipes', required: true },
  user: { type: Types.ObjectId, ref: 'Users', required: true },
},
  {
    timestamps: true,
  }
);

const Likes = model('likes', likeSchema);

module.exports = Likes;
