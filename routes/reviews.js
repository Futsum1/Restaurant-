const express = require('express');
const router = express.Router();


const reviewCtrl = require('../controllers/reviews')


router.post('/orders/:id/reviews', isLoggedIn, reviewCtrl.create);
router.delete('/reviews/:id', isLoggedIn, reviewCtrl.delete);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;