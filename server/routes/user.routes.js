const express = require("express")
const router = express.Router()

const User = require("../models/user.model")

const ensureLoggedIn = (req, res, next) => req.isAuthenticated() ? next() : res.redirect('/login')


router.get("/getAllUsers",  (req, res, next) => {
  User.find()
    .populate('ownProjects')
    .then((data) => res.json(data))
    .catch((err) => err)
})

router.get("/getOneUser/:id", ensureLoggedIn,  (req, res, next) => {
  User.findById(req.params.id)
    .populate('ownProjects')
    .then((data) => res.json(data))
    .catch((err) => err)
})

router.post("/createUser",ensureLoggedIn,(req, res, next) => {
  User.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => err)
})

router.post('/updateUser/:id' , ensureLoggedIn, (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(data => res.json(data))
  .catch(err => next(err))
})

module.exports = router
