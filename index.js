const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const app = express();
const port = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Declare a variable to hold the connection
let db;

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});

app.use(express.json());