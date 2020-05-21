const mongoose = require('mongoose')
const Schema = mongoose.Schema

const projectSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    description: {
        type:String,
        required: true},
    likes: Number,
    city: {
        type:String, 
        default: 'Almeria'},
    location: {
        type: {type: String},
        coordinates: [Number]
    },
    photos: {
        type: String,
        default:'https://www.adorama.com/alc/wp-content/uploads/2019/07/nathan-lee-allen-landscape-feature.jpg'
        },
    goal: {
        type: Number,
        required: true},
    currentAmount: Number,
    helpersNeeded: {
        type: Number,
        required: true},
    projectType: {
        type: String,
        enum: ['restructuring', 'nature cleaning', 'beach cleaning', 'city cleaning'],
        required: false
    },
    contributors: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    helpers: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
}, 

{
    timestamps: true
})

projectSchema.index({ location: '2dsphere'})

const Project = mongoose.model('Project', projectSchema)
module.exports = Project