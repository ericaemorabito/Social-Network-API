const { User, Thought } = require('../models');
const reactionSchema = require('../models/Reaction');

module.exports = {
  // Get all thoughts
  getAllThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  // Get a certain thought by the id
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Add a new thought
  addThought(req, res) {
    Thought.create(req.body)
    .then((thought) => res.json(thought))
    .catch((err) => {
      console.log(err);
      return res.status(500).json(err);
    });
  },
  // Update a thought by the id
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Delete a certain thought by the id
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this ID' })
          : Thought.deleteMany({ _id: { $in: thoughts.reactions } }) //! How do we delete the reactions that go to the thoughts too???
      )
      .then(() => res.json({ message: 'The thought has been deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  //   addReaction,
  addReaction(req, res) {
    //?
  },
  //   deleteReaction
  deleteReaction(req, res) {
    //
  }
}