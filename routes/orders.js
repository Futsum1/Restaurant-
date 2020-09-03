
const express = require('express');
const router = express.Router();


const ordersCtrl = require('../controllers/orders')

router.get('/', ordersCtrl.index);
router.get('/new', ordersCtrl.new);
router.post('/', isLoggedIn, ordersCtrl.create);
router.get('/:id', ordersCtrl.show);
router.delete('/:id', isLoggedIn, ordersCtrl.delete);
router.get('/:id/edit', isLoggedIn, ordersCtrl.edit);
router.put('/:id', isLoggedIn, ordersCtrl.update);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;