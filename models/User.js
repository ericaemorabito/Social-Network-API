const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    },
    thoughts: [thoughtsSchema], //! array of _id values referencing the Thought model --> need to unwind this in controllers
    friends: [userSchema], //! self-references --> need to $unwind to get _id in controllers
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);

// TODO: Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
userSchema.virtual('friendCount').get(function(){
  return userSchema.friends.length;
});

const User = model('user', userSchema);

module.exports = User;
