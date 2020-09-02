const Food = require('../models/food');
const Order = require('../models/order');
const {render} = require('ejs');

module.exports = {
  index,
  new: newFood,
  create,
  show
  };


  function index(req, res){
    Food.find({}, function(err, foods){
    res.render('foods/index', {foods});
    });
  }

  function create(req, res) {
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
          };
    const food = new Foods(req.body);
    food.save(function(err) {
        if (err) return res.render('foods/new');
        res.redirect('/foods');
    });
    }
    
  function show(req, res){
    Food.findById(req.params.id, function(err, food){
      Order.find({food: food._id}, function(err, orders){
         res.render('foods/show',{title: 'Food Detail', food, orders});
    })
  });
}


  function newFood(req, res) {
   res.render('foods/new');

}