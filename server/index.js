const express = require('express');
const path = require('path');
const Raven = require('raven');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 5000;

// Allow reading body of requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

// Configure Raven for logging to Sentry
Raven.config(process.env.SENTRY_DSN).install();

// Connect all our routes to our application
app.use('/', routes);

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
