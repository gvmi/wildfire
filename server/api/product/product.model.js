'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProductSchema = new Schema({
  name: String,
  desc: String,
  price: Number,
  active: Boolean
});

module.exports = mongoose.model('Product', ProductSchema);