const express = require('express');
const router = express.Router();

/**
 * GET /users
 * 取得使用者列表
 */
const usersController = require('../../controllers/users.controllers');

router.get('/', usersController.getUsers);
router.get('/:id', usersController.getUser);
router.post('/', usersController.createUser);

module.exports = router;
