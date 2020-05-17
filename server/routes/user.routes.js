const express = require("express");
const router = express.Router();

const User = require("../models/user.model");

router.get("/getAllUsers", (req, res, next) => {
  User.find()
    .then((data) => res.json(data))
    .catch((err) => err);
});

router.get("/getOneUser/:id", (req, res, next) => {
  User.findById(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => err);
});

router.post("/createUser", (req, res, next) => {
  User.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => err);
});

module.exports = router;
