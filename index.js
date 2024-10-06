const express = require('express');
const cors = require('cors');
require('dotenv').config();

const certificateRoutes = require('./server/routes/certificate');
const projectRoutes = require('./server/routes/project'); // Tambahkan ini

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/certificate', certificateRoutes);
app.use('/api/project', projectRoutes);  // Tambahkan ini

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
