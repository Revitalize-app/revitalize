const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type:String,
        required: true},
    email: {
        type:String,
        required: true},
    password: {
        type:String,
        required: true},
    loc: { 
        type: { 
            type: String 
        }, 
        coordinates: [Number]
    },
    profileImg: {
        type:String,
        default: 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg'},
    typeUser:{
        type: String,
        enum: ['person', 'enterprise']
    },
    city: String,
    wallet: {
        type: Number,
        default: 100},
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