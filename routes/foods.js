
var express = require('express');
var router = express.Router();

const foodsCtrl = require('../controllers/foods')

router.get('/', foodsCtrl.index);
router.get('/new', isLoggedIn, foodsCtrl.new); 
router.get('/:id/', foodsCtrl.show);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;