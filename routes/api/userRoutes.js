const router = require('express').Router();

const {
   getAllUsers,
   getSingleUser,
   addUser,
   updateUser,
   deleteUser,
   addFriend,
   deleteFriend
} = require('../../controllers/userController');

// /api/user
router.route('/').get(getAllUsers).post(addUser);

//! create a new route because in instructions this is not there ??? 
// /api/user/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;