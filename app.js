const express = require('express');
const exhbs = require('express-handlebars');
const products = require('./products.json');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'hbs');
app.engine('hbs', exhbs({
    extname: 'hbs',
}),
);

//----------------------------------------------
app.get('/', (req, res) => {
    res.render('home', { pageTitle: 'Наш дом' });
});
//----------------------------------------------
app.get('/about', (req, res) => {
    res.render('about', { cssFileName: 'about', pageTitle: 'О нас' });
});
//----------------------------------------------
app.get('/products', (req, res) => {
    res.render('products', { products, cssFileName: 'products', pageTitle: 'Наши продукты' });
});
//----------------------------------------------
// динамический параметр
app.get('/product/:productId', (req, res) => {
    console.log(req.params);

    const product = products.find(p => p.id === req.params.productId);
    res.render('product', {product});
});






app.listen(5555, () => {
    console.log(`Application server is running on port ${5555}`);
});







