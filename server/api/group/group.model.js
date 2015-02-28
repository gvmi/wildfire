'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var GroupSchema = new Schema({
  name: String,
  members: Array,
  active: Boolean
});

module.exports = mongoose.model('Group', GroupSchema);