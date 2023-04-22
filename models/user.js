const mongoose = require('mongoose')

const userSchema =  new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    name: String,
    password: String,
    notes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Note'
        }
    ]
})

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString(),
        delete returnedObject._id,
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('User', userSchema)