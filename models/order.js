const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  comment: String,
  rating: {type: Number, min: 1, max: 5, default: 5}
}, {
  timestamps: true
});
     
const  orderSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  name: String,
  food: String,
  reviews: [reviewSchema],
  price: Number,
  quantity: Number,
  tip: Number
});




module.exports = mongoose.model('Order', orderSchema);