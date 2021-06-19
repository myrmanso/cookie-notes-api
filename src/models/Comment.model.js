const { Schema, model, Types } = require('mongoose');

const commentSchema = new Schema({
  comment: { type: String, required: true },
  recipe: { type: Types.ObjectId, ref: 'Recipes' },
  Users: { type: Types.ObjectId, ref: 'Users' },
},
  {
    timestamps: true,
  }
);

const Comments = model('Comments', commentSchema);

module.exports = Comments;
