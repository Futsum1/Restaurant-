
var express = require('express');
var router = express.Router();
const foodsCtrl = require('../controllers/foods')

router.get('/', foodsCtrl.index);
/* GET users listing. */
router.get('/new', foodsCtrl.new); 
// Post flights
// router.post('/', foodsCtrl.create);

router.get('/:id/', foodsCtrl.show);

module.exports = router;