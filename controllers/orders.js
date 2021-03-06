const Order = require('../models/order');
const { render } = require('../server');

module.exports = {
  index,
  show,
  new: newOrder,
  create,
  delete: deleteOrder,
  edit,
  update
};

const MENU = {

  chiken: 20,
  pasta: 25,
  pizza: 25,
  salad: 15,
  dessert: 10,
  salmon: 40,
  wine: 30
}


function deleteOrder(req, res) {
  Order.findByIdAndDelete(req.params.id, function(err) {
      res.redirect('/orders');
  });
}


function edit(req, res) {
 Order.findById(req.params.id, function(err, order) {
  res.render('orders/edit', { order });
 });
}

function update(req, res) {
  Order.findByIdAndUpdate(req.params.id, req.body, function(err, order) {
    

    order.save(function(err){
      res.redirect(`/orders/${req.params.id}`);
    })
  });
  
}

function create(req, res) {
  const order = new Order({
    user_name: req.body.user_name,
    food: req.body.food,
    price: MENU[req.body.food],
    tip: req.body.tip,
    quantity: req.body.quantity,
    date_time: req.body.date_time
    // time: req.body.time
  });
  order.user = req.user._id;
  
  order.save(function(err) {
      if (err) return res.render('orders/new');
      res.redirect(`/orders`);
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
