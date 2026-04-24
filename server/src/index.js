const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/webdb')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Swagger Definition
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Dates API',
      version: '1.0.0',
      description: 'API to retrieve a list of dates',
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
        description: 'Development server',
      },
    ],
  },
  apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
const datesRoutes = require('./routes/dates');
app.use('/api', datesRoutes);

const productRoutes = require('./routes/products');
app.use('/api', productRoutes)

const monitorRoutes = require('./routes/monitors');
app.use('/api', monitorRoutes)

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

// Error handling middleware
app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Swagger UI available at http://localhost:${PORT}/api-docs`);
});

module.exports = app;