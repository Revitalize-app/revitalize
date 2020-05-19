const express = require('express')
const router = express.Router()

const Project = require('../models/project.model')
const User = require('../models/user.model')

const ensureLoggedIn = (req, res, next) => req.isAuthenticated() ? next() : res.redirect('/login')

router.get('/getAllProjects', (req, res, next) =>{
    Project.find()
    .then(data => res.json(data))
    .catch(err => next(err))
})

router.get('/getOneProject/:id', (req, res, next) => {
    console.log(req.params.id)
    console.log("entra en back")
    Project.findById(req.params.id)
    .populate('author')
    .then(data => res.json(data))
    .catch(err =>  next(err))
})

router.post('/createProject',ensureLoggedIn, (req, res, next) => {
    Project.create(req.body)
    .then(data => res.json(data))
    .catch(err => next(err))
})

router.post('/updateProject' , ensureLoggedIn, (req, res, next) => {
    console.log("ENTRA EN LA RUTA", req.body)
    const {project, modifiedAmount, modifiedWallet,  modifiedMoneySpent, creator} = req.body
    let updateProject = Project.findByIdAndUpdate(project, {
        $push:{contributors:creator},
        currentAmount: modifiedAmount,
    }, {new: true})
    let updateUser = User.findByIdAndUpdate(creator, 
        {
        wallet: modifiedWallet,
        moneySpent: modifiedMoneySpent,
       $push: {contributing: project},
    }, {new: true})

    Promise.all([updateProject, updateUser])
        .then(data => {
            console.log("HA FUNCIONADO")
            res.json(data)})
        .catch(err => console.log(err))
})



module.exports = router

