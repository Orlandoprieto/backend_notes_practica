const bcrypt = require('bcrypt');
const userSchema = require('../models/user')

const registerUser = async (request, response) => {
    try {
        const {username, name, password } = request.body;

        const salt = 10;
        const passwordHash = bcrypt.hashSync(password, salt);

        const newUser = await userSchema.create({
            username: username,
            name: name,
            password: passwordHash
        });

        response.status(200).json(newUser);

    } catch (error) {
        response.status(500).json({message_registeruser: error.message})
    }
}

module.exports = registerUser;