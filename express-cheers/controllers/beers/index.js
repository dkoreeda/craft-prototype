const router = require('express').Router();
const controller = require('./controller');

router.get('/:userId', controller.find);
router.post('/', controller.create);

module.exports = router;
