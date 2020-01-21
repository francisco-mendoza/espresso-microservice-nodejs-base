const express = require('express');
var VerifyToken = require('../controllers/VerifyToken');
const authController = require('../controllers/AuthController');
const logger = require('../libs/logger/app-logger');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Bienvenidos a la API');
});

/** Auth Routes */
router.post('/auth/register', (req, res) => {
    authController.register(req, res);
});

router.get('/auth/me', VerifyToken, (req, res, next) => {
    authController.getMe(req, res, next);
});

router.post('/auth/login', (req, res) => {
    authController.login(req, res);
});

router.get('/auth/logout', (req, res) => {
    authController.logout(req, res);
});


module.exports = router;    