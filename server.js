const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./db'); // Import the database configuration

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());

// Import your routes here
const todoRoutes = require('./routes/todoRoutes');

// Use your routes
app.use('/todos', todoRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
