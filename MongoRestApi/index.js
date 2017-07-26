"use strict";

var express = require('express');
var mongo = require('mongodb');
var uuid = require('uuid/v4');

var mProducts = require('./modules/products');
var mOrders = require('./modules/orders');

var app = express();

// products related requests
{
    // create
    app.put('/products', function (req, res) {
        res.end();
    });

    // update
    app.post('/products', function (req, res) {
        res.end();
    });

    // get list
    app.get('/products', function (req, res) {
        res.end();
    });

    // delete
    app.delete('/products', function (req, res) {
        res.end();
    });
}

// orders related requests
{
    // create
    app.put('/orders', function (req, res) {
        res.end();
    });

    // update
    app.post('/orders', function (req, res) {
        res.end();
    });

    //get list
    app.get('/orders', function (req, res) {
        res.end();
    });

    // delete
    app.delete('/orders', function (req, res) {
        res.end();
    });
}

// app start listen
app.listen(3000, function () {
    console.log('Mongo Rest API listening on port 3000!');
});