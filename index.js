const express = require('express');
const connectDB = require('./configs/db');
const router = require('./router/router');

const app = express();
const port = 3000;

// Connect to the database
connectDB();

// Middleware for parsing JSON
app.use(express.json());

// Use the router for '/api' routes
app.use('/api', router);

// Default route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
