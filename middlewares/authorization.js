require('dotenv').config()
const jwt = require('jsonwebtoken');

const authorization = (req, res, next) => {
    try {
        const {token} = req.headers;

        if(!token) throw new Error('no se encontro token')

        const payload = jwt.decode(token, process.env.FIRMA_TOKEN);

        let timeUnix = new Date().getTime() / 1000;

        if(payload.exp <= timeUnix) throw new Error('el token se encuentra expirado');

        req.headers.id = payload.id 
        next()

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = authorization