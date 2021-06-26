const { Schema, model, Types } = require('mongoose');

const commentSchema = new Schema({
  text: { type: String, required: true },
  recipe: { type: Types.ObjectId, ref: 'Recipes', required: true },
  user: { type: Types.ObjectId, ref: 'Users', require: true },
},
  {
    timestamps: true,
  }
);

const Comments = model('Comments', commentSchema);

module.exports = Comments;
