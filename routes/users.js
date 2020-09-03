const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user')

router.post('/foods/:id/users', userCtrl.create)

module.exports = router;


// var express = require('express');
// const Order = require('../models/order')
// const Food = require('../models/food')
// var router = express.Router();
// let foods = ["Steak", "Chiken"]
// const Controller = require('../controllers/orders')
// /* GET users listing. */
// router.get('/', function (req, res, next) {
//   res.send(foods)

//   res.redirect('/');
// });
// router.get('/foods', function (req,res){
//   Food.find()
//   .then(function (foods){
//     res.render('foods',{foods})
//   })
//   .catch(function(err){
//     res.send(err)
//   })

// })

// function isLoggedIn(req, res, next) {
//   if (req.isAuthenticated()) return next();
//   res.redirect('/auth/google');
// }


//   /*router.post('/makeorder',  function (req, res) {
//   let order = new Order({
//     name:req.body.name,
//     price:req.body.price,
//     quantity: req.body.quantity
//   })

// order.save()


// })*/

// module.exports = router
