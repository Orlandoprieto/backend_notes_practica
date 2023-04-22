const userSchema = require('../models/user');

const getNotes = async (required, response) => {
    try {
        const {id} = required.headers;

        const user = await userSchema.findById(id).populate('notes')

        response.status(200).json(user.notes)

    } catch (error) {
        response.status(500).json({ message: error.message });
    } 
}

module.exports = getNotes