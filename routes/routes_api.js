const express        = require('express');
const VerifyToken    = require('../controllers/VerifyToken');
const authController = require('../controllers/AuthController');
const router         = express.Router();

router.get('/', (req, res) => {
	res.status(200).send({
    response:"Bienvenidos a la Espresso"
  });
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