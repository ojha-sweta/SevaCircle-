
const express = require('express');
const router = express.Router();

// @route   GET /api/test
// @desc    Test API endpoint
// @access  Public
router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is working!",
    data: {
      service: "InNeedIndeed Backend API",
      version: "1.0.0",
      timestamp: new Date().toISOString(),
      endpoints: {
        health: "/health",
        test: "/api/test"
      }
    }
  });
});

// @route   GET /api/test/db
// @desc    Test database connection
// @access  Public
router.get('/db', async (req, res) => {
  try {
    const mongoose = require('mongoose');
    const connectionState = mongoose.connection.readyState;
    
    const states = {
      0: 'disconnected',
      1: 'connected',
      2: 'connecting',
      3: 'disconnecting'
    };

    res.status(200).json({
      success: true,
      message: "Database connection test",
      database: {
        status: states[connectionState],
        host: mongoose.connection.host || 'Not connected',
        name: mongoose.connection.name || 'Not connected'
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Database connection error",
      error: error.message
    });
  }
});

module.exports = router;
