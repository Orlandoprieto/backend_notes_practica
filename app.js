const express = require('express');
const app = express();

//routes
const routesUser = require('./routes/routesUser')
const routesNotes = require('./routes/routesNote')

app.use(express.json())
app.use('/', routesUser)
app.use('/', routesNotes)

module.exports = app;