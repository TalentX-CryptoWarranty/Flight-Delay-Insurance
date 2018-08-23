
'use strict';

const mongoose = require('mongoose');
const schema   = new mongoose.Schema({
    first_name  : String,
    last_name   : String,
    email       : String,
    flightNumber: String,
    flightDate  : String
});

module.exports = mongoose.model('customer', schema);