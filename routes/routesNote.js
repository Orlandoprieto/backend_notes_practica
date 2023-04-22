const express = require('express');
const routesNotes = express.Router();

//controllers
const getNotes = require('../controllers/getNotes');
const createNote = require('../controllers/createNote')
const deleteNote = require('../controllers/deleteNote')

//middlewares
const authorization = require('../middlewares/authorization')

//routes
routesNotes.get('/notes', [authorization], getNotes)
routesNotes.post('/notes', createNote)

module.exports = routesNotes;