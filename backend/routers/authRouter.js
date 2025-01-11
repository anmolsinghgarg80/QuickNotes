const express = require('express'); 
const authController = require('../controllers/authController');
const { identifier } = require('../middlewares/identification');
const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/logout', identifier, authController.logout);

router.get('/get-user', identifier, authController.getUser);

module.exports = router; 