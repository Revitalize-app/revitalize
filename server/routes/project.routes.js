const express = require('express')
const router = express.Router()

const Project = require('../models/project.model')
const User = require('../models/user.model')

const ensureLoggedIn = (req, res, next) => req.isAuthenticated() ? next() : res.redirect('/login')

router.get('/getAllProjects', (req, res, next) =>{
    Project.find()
    .populate('author')
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

router.post('/postProject',ensureLoggedIn, (req, res, next) => {
    console.log(req.body)
    let project
    Project.create(req.body)
    .then(data => {
        project = data
        return User.findByIdAndUpdate(data.author, {$push:{ownProjects: data._id}},{new:true})
    })
    .then(() => res.status(200).json(project))
    .catch(err => next(err))
})

router.post('/addHelper' , ensureLoggedIn, (req,res,next) => {
    let updatedProject
    Project.findByIdAndUpdate(req.body.project, {$push: {helpers: req.body.helper}},{new: true})
    .then(theProject => {
        updatedProject = theProject
        return User.findByIdAndUpdate(req.body.helper, {$push: {helping: theProject._id}},{new: true})
    })
    .then(()=> res.status(200).json(updatedProject))
    .catch(err => console.log(err))
})

router.post('/updateProject' , ensureLoggedIn, (req, res, next) => {
    console.log("ENTRA EN LA RUTA", req.body)
    const {project, modifiedAmount, modifiedWallet,  modifiedMoneySpent, creator} = req.body
    User.findById(creator)
    .then(creator=>{
        if(creator.contributing.includes(project)){
            let updateProject = Project.findByIdAndUpdate(project, {
                currentAmount: modifiedAmount,
            }, {new: true})

            let updateUser = User.findByIdAndUpdate(creator, 
                {
                wallet: modifiedWallet,
                moneySpent: modifiedMoneySpent,
            }, {new: true}) 
            Promise.all([updateProject, updateUser])
            .then(data => {
                console.log("HA FUNCIONADO")
                res.json(data)})
            .catch(err => console.log(err))

        }else{
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
        }
    })
    .catch(err => console.log(err))

})



module.exports = router

