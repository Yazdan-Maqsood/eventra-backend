const express = require("express");
const showEventRoute = express.Router();
const addEventRoute = express.Router();
const deleteEventRoute = express.Router();
const updateEventRoute = express.Router();
const { handleShowEvents, handleAddEvent, handleDeleteEvent, handleEditEventDetails } = require("../controllers/events.controller");

addEventRoute.route('/')
    .post(handleAddEvent);

showEventRoute.route('/')
    .get(handleShowEvents);

deleteEventRoute.route('/:id')
    .delete(handleDeleteEvent);    

updateEventRoute.route('/:id')
    .put(handleEditEventDetails);    

module.exports = { showEventRoute, addEventRoute, deleteEventRoute, updateEventRoute };    