
const express = require('express');
const router = express.Router();


const ordersCtrl = require('../controllers/orders')

router.get('/', ordersCtrl.index);
router.get('/new', ordersCtrl.new);
router.post('/', ordersCtrl.create);
router.get('/:id', ordersCtrl.show);

module.exports = router;