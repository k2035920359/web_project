const express = require('express');
const router = express.Router()

/**
 * GET /index/hello
 * Test hello world endpoint
 */
const indexController = require('../../controllers/index.controllers');

router.get('/hello', indexController.hello);

module.exports = router;
