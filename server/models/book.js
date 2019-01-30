const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const setStringType = (maxLength) => ({ type: String, required: true, maxlength: maxLength })

const bookSchema = new Schema({
title:setStringType(256) ,//{type: String, required: true} problem
author: String,
pages: Number,
price: Number
});

module.exports = mongoose.model('Book', bookSchema);
}