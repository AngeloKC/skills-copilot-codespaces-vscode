// Create web server

// Import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

// Import routes
const comments = require('./routes/comments');

// Create the Express app
const app = express();

// Configure the app
app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

// Add routes
app.use('/comments', comments);

// Start the server
app.listen(5000, () => {
  console.log('Listening on http://localhost:5000');
});