require("dotenv");
const express = require("express");
const app = express();
const cors = require("cors");
const Port = process.env.PORT;
const { showEventRoute, addEventRoute, deleteEventRoute, updateEventRoute } = require("./routers/event.route");
const { registerCustomerRoute, getRegistrationsRoute, deleteRegistrationRoute } = require("./routers/registrationCustomer.route");
// Allow multiple specific origins
const allowedOrigins = process.env.ORIGIN;

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like curl or Postman)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/add-event', addEventRoute);
app.use('/edit-event', updateEventRoute)
app.use('/get-events', showEventRoute);
app.use('/delete-event', deleteEventRoute);
app.use('/register-customer', registerCustomerRoute);
app.use('/get-registrations', getRegistrationsRoute);
app.use('/delete-registration', deleteRegistrationRoute);

app.listen(Port ,() => {
    console.log(`Server started succesfully at ${Port}`);
})