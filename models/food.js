const mongoose = require('mongoose')
const Schema = mongoose.Schema


const  foodSchema = new Schema({
    name: String,
    price: Number,
  });

  module.exports = mongoose.model('Food', foodSchema);