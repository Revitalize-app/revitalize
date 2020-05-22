require('dotenv').config()

const mongoose = require('mongoose')
const faker = require('faker')
const User = require('../models/user.model')
const Project = require('../models/project.model')

mongoose.connect(`mongodb+srv://${process.env.MONGODBUSER}:${process.env.MONGODBPASSWORD}@revitalize-oltwc.gcp.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })

const bcrypt = require("bcrypt")
const bcryptSalt = 10
const salt = bcrypt.genSaltSync(bcryptSalt)


const randomFloat = (max, min = 0) => Math.random() * (max - min) + min
const randomLatitude = () => randomFloat(40.481555, 40.375425)
const randomLongitude = () => randomFloat(-3.647014, -3.729187)

let allProjects = []
let allU = []


const deleteUsers = User.deleteMany()
const deleteProjects = Project.deleteMany()



Promise.all([deleteUsers, deleteProjects])
    .then(() => {
        let users = []
        for (let i = 1; i <= 10; i++) {
            let user = {
                username: faker.internet.userName(),
                email: faker.internet.email(),
                password: bcrypt.hashSync('lala', salt),
                city: faker.address.city(),
                loc: {
                    type: 'Point',
                    coordinates: [ randomLatitude(),randomLongitude()]
                },
                profileImg: faker.internet.avatar(),
                typeUser: faker.random.arrayElement(['person', 'enterprise']),
                wallet: 100,
                moneySpent: faker.random.arrayElement([0,1,2,3,4,5,6,7,8,9,10,20,30,40]),
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
                    loc: {
                        city: 'Madrid',
                        coordinates: [ randomLatitude(), randomLongitude()]
                    },
                    photos: faker.image.city(),
                    goal: faker.random.arrayElement([10,20,30,40]),
                    currentAmount: 0,
                    helpersNeeded: faker.random.arrayElement([1,2,3,4]),
                    projectType: faker.random.arrayElement(['restructuring', 'nature cleaning', 'beach cleaning', 'city cleaning']),
                    contributors: [allU[0]._id, allU[2]._id, allU[2]._id],
                    helpers: [allU[3]._id]
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












