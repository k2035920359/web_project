var express = require('express');
const app = require('../../app');
var app = express.app();

/**
 * GET /users/list
 * 取得使用者列表
 */
app.get('/list', function (req, res) {
  res.json({
    success: true,
    data: [
      { id: 1, name: 'Tom', age: 30 },
      { id: 2, name: 'Amy', age: 25 }
    ]
  });
});

/**
 * GET /users/:id
 * 取得單一使用者
 */
app.get('/:id', function (req, res) {
  const userId = req.params.id;

  res.json({
    success: true,
    data: {
      id: userId,
      name: 'Tom',
      age: 30
    }
  });
});

module.exports = app;
