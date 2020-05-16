require('dotenv').config()

const mongoose = require('mongoose')
const faker = require('faker')
const User = require('../models/user.model')
const Project = require('../models/project.model')

mongoose.connect(`mongodb+srv://${process.env.MONGODBUSER}:${process.env.MONGODBPASSWORD}@revitalize-oltwc.gcp.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })

const bcrypt = require("bcrypt")
const bcryptSalt = 10
const salt = bcrypt.genSaltSync(bcryptSalt)


//const randomNum = (max) => Math.floor(Math.random() * (max - 1))

let allProjects = []
let allU = []


const deleteUsers = User.deleteMany()
const deleteProjects = Project.deleteMany()



Promise.all([deleteUsers, deleteProjects])
    .then(() => {
        let users = []
        for (let i = 1; i <= 100; i++) {
            let user = {
                username: faker.internet.userName(),
                email: faker.internet.email(),
                password: bcrypt.hashSync('lala', salt),
                location: {
                    type: 'Point',
                    coordinates: [ faker.address.longitude(),faker.address.latitude()]
                },
                profileImg: faker.internet.avatar(),
                likes: faker.random.number(),
                typeUser: faker.random.arrayElement(['person', 'enterprise']),
                wallet: 0,
                contributing: [],
                helping: [],
                ownProjects: [],
                rol: 'user'
            }
            users.push(user)
        };
        return User.create(users)
    })
    .then(allUsers => {
        let promises = []
        allU = allUsers
        allU.forEach(user => {
            let projects = []

                projects.push({
                    author: user._id,
                    description: faker.lorem.sentences(3),
                    likes: faker.random.number(),
                    location: {
                        type: 'Point',
                        coordinates: [ faker.address.longitude(), faker.address.latitude()]
                    },
                    photos: [faker.image.city()],
                    goal: 10,
                    currentAmount: 0,
                    projectType: faker.random.arrayElement(['restructuring', 'nature cleaning', 'beach cleaning', 'city cleaning']),
                    contributors: [allU[0]._id, allU[2]._id, allU[2]._id],
                    helpers: [allU[3]._id, allU[4]._id, allU[5]._id]
                })
            
            promises.push(Project.create(projects)
                .then(createdProjects => {
                    allProjects.push(...createdProjects)
                    return createdProjects
                })
                .catch(err => console.log('Fallo al crear los proyectos', err)))
        })
        return Promise.all(promises)
    })
    .then(() => {
        let promises = []
        allProjects.forEach(Project => {
            promises.push(User.findByIdAndUpdate(Project.author, { $push: { ownProjects: Project._id } }, { new: true }))
        })
        return Promise.all(promises)
    })
    .then(() => console.log("Éxito!"))
    .catch(err => console.log(`Ha ocurrido un error: ${err}`))












