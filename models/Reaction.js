const { Schema, Types } = require('mongoose');
const formatDate = require('../utils/helper');

// Schema to create Reaction model
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true,
      max_length: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      get: date => formatDate(date)
    }
    ,
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

module.exports = reactionSchema;
