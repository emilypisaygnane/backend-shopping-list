const express = require('express');
const cookieParser = require('cookie-parser');
// const authenticate = require('./middleware/authenticate');
const app = express();
const cors = require('cors');

// Built in middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ['http://localhost:5432'],
    credentials: true,
  })
);

// App routes
app.use('/api/v1/items', require('./controllers/items'));
app.use('/api/v1/users', require('./controllers/users'));


// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
