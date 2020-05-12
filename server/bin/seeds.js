require('dotenv').config()

const mongoose = require('mongoose')
const faker = require('faker')
const User = require('../models/user.model')
const Project = require('../models/project.model')

mongoose.connect(`mongodb+srv://${process.env.MONGODBUSER}:${process.env.MONGODBPASSWORD}@revitalize-oltwc.gcp.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })

const bcrypt = require("bcrypt")
const bcryptSalt = 10
const salt = bcrypt.genSaltSync(bcryptSalt)


const users = []

for (let i = 1; i <= 10; i++) {

    users.push({

        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: bcrypt.hashSync('lala', salt),
        location: {
            type: 'Point',
            coordinates: [faker.address.latitude(), faker.address.longitude()]
        },
        profileImg: faker.internet.avatar(),
        likes: faker.random.number(),
        typeUser: 'person',
        wallet: 0,
        contributing: projectID,
        

    })


}