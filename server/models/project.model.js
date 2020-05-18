const mongoose = require('mongoose')
const Schema = mongoose.Schema

const projectSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    description: String,
    likes: Number,
    location: {
        type: {type: String},
        coordinates: [Number]
    },
    photos: [String],
    goal: Number,
    currentAmount: Number,
    helpersNeeded: Number,
    projectType: {
        type: String,
        enum: ['restructuring', 'nature cleaning', 'beach cleaning', 'city cleaning']
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