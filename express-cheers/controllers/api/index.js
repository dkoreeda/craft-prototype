const router = require('express').Router();
const controller = require('./controller');

router.get('/:beer', controller.index);
router.get('/style/:style', controller.show);
router.get('/event/:city', controller.city);
router.get('/beers/style/:style', controller.rec);


module.exports = router;
