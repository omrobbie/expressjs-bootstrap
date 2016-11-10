var express = require('express');
var app = express();
var exphbs = require('express-handlebars');

app.use(express.static('public'));

app.engine('.hbs', exphbs({
	extname : '.hbs',
	defaultLayout : 'main'
}));
app.set('view engine', '.hbs');

var productsRouter = require('./products');
app.use('/products', productsRouter);

app.get('/', function(req, res) {
	// res.send('Hello World!');

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

	res.render('home', {
		title : 'Home Page',
		products : products
	});
});

app.listen(3000, function() {
	console.log('start listening on port 3000!');
});