//dependecias
require('dotenv').config()
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

//schemas
const userSchema = require('../models/user');

const loginUser = async (required, response) => {
    try {
        const {username, password} = required.body

        const user = await userSchema.findOne({username: username})

        if(!user){
            throw new Error("usuario no encontrado")
        }

        const passwordCorrect = await bcrypt.compare(password, user.password)

        if(passwordCorrect) {
            const payLoad = {username: user.username, id: user.id}
            const token = jwt.sign(payLoad, process.env.FIRMA_TOKEN, {expiresIn: "1h"})
            response.status(200).json({token: token})

        } else{
            throw new Error('username o password incorrectos')
        }

    } catch (error) {
        response.status(500).json({message_loginuser: error.message})
    }
}

module.exports = loginUser