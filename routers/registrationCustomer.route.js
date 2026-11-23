const express = require("express");
const registerCustomerRoute = express.Router();
const getRegistrationsRoute = express.Router();
const deleteRegistrationRoute = express.Router();
const { handleRegisterCustomer, handleGetRegistrations, handleDeleteRegistration } = require("../controllers/registration.controller");

registerCustomerRoute.route('/')
    .post(handleRegisterCustomer);

getRegistrationsRoute.route('/')
    .get(handleGetRegistrations);

deleteRegistrationRoute.route('/:id')
    .delete(handleDeleteRegistration);
    
module.exports = { registerCustomerRoute, getRegistrationsRoute, deleteRegistrationRoute };    