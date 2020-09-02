const Order = require('../models/order');
const { render } = require('../server');

module.exports = {
  index,
  showReview,
  new: newOrder
};

function newOrder(req, res) {
  res.render('orders/new');

}

function index(req, res) {
  Order.find({}, function(err, orders) {
    res.render('orders/index', {orders});
  })

}

function showReview(req,res){

};
