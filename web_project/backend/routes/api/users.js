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
router.put('/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUser);

module.exports = router;
