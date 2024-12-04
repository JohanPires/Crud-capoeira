const express = require("express");
const router = express.Router();
const UserControl = require("../Controller/UserController");

router.get("/users", UserControl.getAllUsers);
router.get("/users/:id", UserControl.getOneUser);
router.post("/users", UserControl.createUser);
router.put("/users/:id", UserControl.updateUser);
router.delete("/users/:id", UserControl.deleteUser);

module.exports = router;
