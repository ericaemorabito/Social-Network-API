const { Schema, model } = require('mongoose');
//const reactionSchema = require('./Reaction');

// Schema to create User model
const reactionSchema = new Schema(
  {
    reactionId: {
      //!
    },
    reactionBody: {
      type: String,
      required: true,
      //! 280 char max
    },
    username: {
      type: String,
      required: true
    },
    createdAt:
    //!
    ,
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);

module.exports = reactionSchema;
