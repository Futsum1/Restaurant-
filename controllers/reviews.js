const Order = require('../models/order');


module.exports = {
  create,
  delete: deleteReview,
  edit
};



function deleteReview(req, res) {
    Order.findOne({'reviews._id': req.params.id}, function(err, order) {
        const reviewSubdoc = order.reviews.id(req.params.id);
        reviewSubdoc.remove();
        order.save(function(err) {
            res.redirect(`/orders/${order._id}`);
        })
    })
}


function create(req, res) {
    Order.findById(req.params.id, function(err, order) {
        order.reviews.push(req.body);
        order.save(function(err) {
            res.redirect(`/orders/${req.params.id}`)
        });
    });
}

function edit(req, res) {
    Review.findById(req.params.id, function(err, review) {
     res.render('reviews/edit', { review });
    });
   }