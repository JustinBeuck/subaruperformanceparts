'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Products Schema
 */
var ProductsSchema = new Schema({
	// Products model fields   
	// ...
});

mongoose.model('Products', ProductsSchema);