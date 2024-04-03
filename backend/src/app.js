const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const xss = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");
const bodyParser = require("body-parser");
const port = 3000;

const Borgo = require("./models/borgo.model.js");
const User = require("./models/user.model.js");
const Order = require("./models/order.model.js");

const borgoRoute = require("./v1/routes/borgo.route.js");
const userRoute = require("./v1/routes/user.route.js");
const orderRoute = require("./v1/routes/order.route.js");

const app = express();

// connessione al database
mongoose
  .connect(
    `mongodb+srv://giorgioarcamone93:kLCWLlCoI6PwJRhi@borgoapi.y2jtmaz.mongodb.net/?retryWrites=true&w=majority&appName=BorgoAPI`
    // { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connected to the database!");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["http://localhost:5173"], // porta per il frontend
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use(mongoSanitize());
app.use(xss());

// routes
app.use("/api/v1/borgo", borgoRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/order", orderRoute);
