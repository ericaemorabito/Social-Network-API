const { ObjectId } = require('mongoose').Types;
const { User } = require('../models');

const userController = {
  // Get all users
  getAllUsers(req, res) {
    User.find({})
    .populate('friends')
    .populate('thoughts')
      .then(dbUsers => {
        // const userObject = await {
        //   users
        // };
        return res.json(dbUsers);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Get a single user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
    .populate('friends')
      .select('-__v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this ID' })
          : res.json({
            user
          })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Add a user
  addUser(req, res) {
    User.create(req.body)
      .then(user => res.json(user))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err)
      });
  },
  // Update a user
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Add a new friend
  addFriend(req, res) {
    //!
  },
  // Delete a certain friend
  deleteFriend(req, res) {
    //!
  }
}

module.exports = userController;