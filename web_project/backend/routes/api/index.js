var express = require('express');
var app = express.app();

/**
 * GET /index/hello
 * 系統測試
 */
app.get('/hello', function (req, res) {
  const data = { 
    message: 'Hello',
    timestamp: Date.now() 
  };

  res.json(data);
});

/**
 * GET /index/health
 * 健康檢查
 */
app.get('/health', function (req, res) {
  const data = { 
    message: 'Everything is ok',
    timestamp: Date.now() 
  };

  res.json(data);
});

module.exports = app;
