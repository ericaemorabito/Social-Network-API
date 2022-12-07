// TODO:
// getAllUsers,
// getSingleUser,
// addUser,
// updateUser,
// deleteUser,
// addFriend,
// deleteFriend

const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

module.exports = {
  // Get all users
  getAllUsers(req, res){
    User.find()
    .then(async (users) => {
      const userData = await {
        users
      };
      return res.json(userData);
    })
    .catch((err)=> {
      console.log(err);
      return res.status(500).json(err);
    });
  }
}