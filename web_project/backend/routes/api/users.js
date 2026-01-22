const express = require('express');
const router = express.Router();

/**
 * GET /users
 * 取得使用者列表
 */
router.get('/', function (req, res) {
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
router.get('/:id', function (req, res) {
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

module.exports = router;
