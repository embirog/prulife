'use strict';
var quotes = require('../api/quote');
var express = require('express');
var router = express.Router();

 module.exports = function(router) {


	router.route('/quotes').post( function(req, res) { 
		console.log(req.body); 
		quotes.addQuote(req,res); 
	})
	.get(function(req,res) { 
		quotes.getAllQuotes(req,res)
	});

	router.route('/quotes/:quote_id')
	.put( function(req, res) { 
		quotes.updateQuote(req, res, req.params.quote_id)
	})
	.delete(function(req, res) { 
		quotes.deleteQuote(req, res, req.params.quote_id) 
	});

	router.route('*').get(function(req, res) {
		res.sendfile('./public/index.html'); // load our public/index.html file
	});


};


