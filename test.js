"use strict"
 var request = require('supertest')
 var app = require('./index.js')
 var request = request("http://localhost:8080")

 describe('products', function() {
     describe('GET', function(){
         it('Should return two products with empty consumption', function(done){
             request.get('/products')
                 .expect('Content-Type', /json/)
                 .expect('[{"Tariff name":"basic electricity tariff","Annual costs (€/year)":60},{"Tariff name":"Packaged tariff","Annual costs (€/year)":800}]')
                 .expect(200, done);
         });
         it('Should return two products with 3500kWh/year consumption', function(done){
            request.get('/products?consumption=3500')
            .expect('Content-Type', /json/)
            .expect('[{"Tariff name":"Packaged tariff","Annual costs (€/year)":800},{"Tariff name":"basic electricity tariff","Annual costs (€/year)":830}]')
            .expect(200, done);
        });
        it('Should return two products with 4500kWh/year consumption', function(done){
           request.get('/products?consumption=4500')
           .expect('Content-Type', /json/)
           .expect('[{"Tariff name":"Packaged tariff","Annual costs (€/year)":950},{"Tariff name":"basic electricity tariff","Annual costs (€/year)":1050}]')
           .expect(200, done);
       });
       it('Should return two products with 6000kWh/year consumption', function(done){
          request.get('/products?consumption=6000')
          .expect('Content-Type', /json/)
          .expect('[{"Tariff name":"basic electricity tariff","Annual costs (€/year)":1380},{"Tariff name":"Packaged tariff","Annual costs (€/year)":1400}]')
          .expect(200, done);
      });
     });
 });