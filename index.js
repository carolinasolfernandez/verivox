const express = require("express");
const products = require('./products.js');
const app = express();


app.get('/products', function (req, res) {
    const consumption = req.query.consumption;
    let consumptionNumeric = 0;
    if (consumption != null) {
        consumptionNumeric = Number(consumption);
    }
    res.send(products.compare(consumptionNumeric));
});


app.listen(8080, () => {
 console.log("Listening on port 8080");
 console.log("localhost:8080/products?consumption=");
});