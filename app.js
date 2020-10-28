const express = require('express');
const exhbs = require("express-handlebars")
const app = express();
const products = require("./products.json")
const port = 1208;

app.use(express.static('public'));

app.set('view engine', 'hbs');

app.engine('hbs', exhbs({ extname: "hbs",}));

app.get('/', (req, res) => {
  res.render('home', { pageTitle: 'Главная' });
});

app.get('/about', (req, res) => {
  res.render('about', { pageTitle: 'О нас' });
});

app.get('/products', (req, res) =>
  res.render('products', { products, cssFileName: 'products', pageTitle: "Наш товар"}),
);

app.get("/product/:productId", (req, res) => {
    const product = products.find(p => p.id === req.params.productId)
    res.render("product", {product})
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
