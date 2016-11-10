var express = require('express');
var products = express.Router();

products.get('/', function(req, res) {
	// res.send('Product Page');

	var products = [
		{
			title : 'Product One',
			price : 1000
		},
		{
			title : 'Product Two',
			price : 1000
		}
	];

	res.render('listing', {
		layout : 'products',
		listProducts : products
	});
});

module.exports = products;