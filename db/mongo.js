require('dotenv').config();
const mongoose = require('mongoose');

const conectDataBase = async () => {
    return mongoose.connect(process.env.MONGO_URI)
}

module.exports = conectDataBase