// const User = require('../../models/user');
const router = require('express').Router();
const passport = require('passport');
const bodyParser = require('body-parser');
const controller = require('./controller');
const AuthService = require('../../services/auth');

// ----------------------------------------
// users index

router.get('/user', bodyParser.urlencoded({extended: true}), controller.userId);
router.get('/logout', controller.logout);
router.post('/', bodyParser.urlencoded({extended: true}), passport.authenticate('local-signup'), controller.signup);
router.post('/login', bodyParser.urlencoded({extended: true}), passport.authenticate('local-login'), controller.login);

module.exports = router;
