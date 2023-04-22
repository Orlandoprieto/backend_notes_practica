const noteScheme = require('../models/note');
const userSchema = require('../models/user');

const createNote = async (request, response) => {
    try {
        const {content, important, username} = request.body;

        const user = await userSchema.findOne({ username })

        if(!user) throw new Error('no se encontro el usuario')

        const newNote = await noteScheme.create({
            content,
            date: new Date(),
            important: (important == undefined) ? false : important,
            user: user.id
        })

        // agrega el id de "note" dentro del campo "notes" del usuario
        user.notes = user.notes.concat(newNote.id)
        await user.save()

        response
            .status(200)
            .json(newNote)

    } catch (error) {

        response.status(400).send(error)
        
    }
}

module.exports = createNote;