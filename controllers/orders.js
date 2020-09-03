const Order = require('../models/order');
const { render } = require('../server');

module.exports = {
  index,
  show,
  new: newOrder,
  create
};

function create(req, res) {
  const order = new Order(req.body);
  order.save(function(err) {
      if (err) return res.render('orders/new');
      res.redirect(`/orders/${order._id}`);
  });
  }
  
function show(req, res){
  Order.findById(req.params.id, function(err, order){
    res.render('orders/show',{title: 'Order Detail',  order});
})
}

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
