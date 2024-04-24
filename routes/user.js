const express = require('express');
const router = express.Router();
const{handleGetAllUsers,
     getUserById,handleUpdateUserById,
     handleDeleteUserById,
     handleCreateNewUser} = require("../controller/user");


router.route("/")
.get( handleGetAllUsers)
.post(handleCreateNewUser);
 
router.route("/:id")
.get(getUserById)
.patch(handleUpdateUserById)
.delete(handleDeleteUserById);



module.exports = router;