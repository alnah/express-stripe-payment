require("dotenv").config();
require("express-async-errors");
const express = require("express");

const { errorHandler, routeNotFound } = require("./middlewares");

// express server
const app = express();
const port = process.env.PORT || 3000;

// parser
app.use(express.json());
app.use(express.static("./public"));

// error handling
app.use(routeNotFound);
app.use(errorHandler);

// helper to start server
const start = () => {
  try {
    app.listen(port, () =>
      console.log(`·Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.error(error);
  }
};

// start server
start();
