const { Schema, model, Types } = require('mongoose');

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  active: { type: Boolean, default: true },
},
  {
    timestamps: true,
  });

const Users = model('Users', userSchema);

module.exports = Users;
