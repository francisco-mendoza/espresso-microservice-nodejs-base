const express        = require('express');
const userController = require('../controllers/UserController');
const router         = express.Router();

/** User Routes */
router.post('/users', (req, res) => {
	userController.addUser(req, res);
});

router.get('/users', (req, res) => {
	userController.getUsers(req, res, next);
});

router.post('/users/:id', (req, res) => {
	userController.getUserById(req, res);
});

router.delete('/users/:id', (req, res) => {
	userController.deleteUserById(req, res);
});

router.put('/users/:id', (req, res) => {
	userController.deleteUserById(req, res);
});

router.get('/getTestSql', (req, res) => {
	userController.getTestSql(req, res, next);
});
module.exports = router;