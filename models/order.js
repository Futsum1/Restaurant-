const { time } = require('console');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  comment: String,
  name: String,
  rating: {type: Number, min: 1, max: 5, default: 5}
}, {
  timestamps: true
});
     
const  orderSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  user_name: String,
  food: String,
  reviews: [reviewSchema],
  price: Number,
  quantity: Number,
  tip: Number,
  date_time: Number,
  time: Number
});




module.exports = mongoose.model('Order', orderSchema);