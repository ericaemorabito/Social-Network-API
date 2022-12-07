const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

module.exports = {
  // Get all users
  getAllUsers(req, res) {
    User.find()
      .then(async (users) => {
        const userObject = await {
          users
        };
        return res.json(userData);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Get a single user
  // ? Where do we put async and await here?
  // ? How do we know the Id with userId
  // ? We don't need to send back .status(200)?
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
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
  // ! .create .findOne are Mongoose or MongoDB?
  addUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
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