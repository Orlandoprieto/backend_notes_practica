const mongoose = require('mongoose');

const notesScheme = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        minLength: 10

    },
    date: Date,
    important: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    } 
})

notesScheme.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString(),
        delete returnedObject._id,
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Note', notesScheme)