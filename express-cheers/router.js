const router = require('express').Router();

router.use('/', require('./controllers/api'));
router.use('/users', require('./controllers/users'));
router.use('/beers', require('./controllers/beers'));


module.exports = router;
