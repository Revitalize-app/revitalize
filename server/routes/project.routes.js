const express = require('express')
const router = express.Router()

const Project = require('../models/project.model')
const User = require('../models/user.model')

const ensureLoggedIn = (req, res, next) => req.isAuthenticated() ? next() : res.redirect('/login')

router.get('/getAllProjects', (req, res, next) =>{
    Project.find()
    .then(data => res.json(data))
    .catch(err =>  err)
})

router.get('/getOneProject/:id', (req, res, next) => {
    console.log(req.params.id)
    console.log("entra en back")
    Project.findById(req.params.id)
    .populate('author')
    .then(data => res.json(data))
    .catch(err =>  console.log(err))
})

router.post('/createProject',ensureLoggedIn, (req, res, next) => {
    Project.create(req.body)
    .then(data => res.json(data))
    .catch(err => console.log('Hubo un error al crear el proyecto', err))
})

module.exports = router

