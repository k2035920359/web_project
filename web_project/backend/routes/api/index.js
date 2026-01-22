const express = require('express');
const router = express.Router()

/**
 * GET /index/hello
 * Test hello world endpoint
 */
router.get('/hello', function (req, res) {
  const data = { 
    message: 'Hello',
    timestamp: Date.now() 
  };

  res.json(data);
});

/**
 * GET /index/health
 * check system health
 */
router.get('/health', function (req, res) {
  const data = { 
    message: 'Everything is ok',
    timestamp: Date.now() 
  };

  res.json(data);
});

module.exports = router;
