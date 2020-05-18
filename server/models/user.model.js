const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    location: { 
        type: { 
            type: String 
        }, 
        coordinates: [Number]
    },
    profileImg: String,
    typeUser:{
        type: String,
        enum: ['person', 'enterprise']
    },
    wallet: Number,
    moneySpent: Number,
    contributing: [{
        type: Schema.Types.ObjectId,
        ref: 'Project'
    }],
    helping: [{
        type: Schema.Types.ObjectId,
        ref: 'Project'
    }],
    ownProjects: [{
        type: Schema.Types.ObjectId,
        ref: 'Project'
    }],
    rol: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }

}, {
    timestamps: true
})

userSchema.index({ location: '2dsphere'})

const User = mongoose.model("User", userSchema)

module.exports = User