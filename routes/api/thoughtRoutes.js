const router = require('express').Router();

const {
  getAllThoughts,
  getSingleThought,
  addThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/')
  .get(getAllThoughts)
  .post(addThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought)
  .post(addReaction)

  // /api/thoughts/:thoughtId/reactions/:reactionId
  router.route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction);


module.exports = router;