
'use strict';



const express = require('express');
const app     = express();

const helmet      = require('helmet');       // 해킹방지
const compression = require('compression');  // 압축해줌
const bodyParser  = require('body-parser');  // POST - body 를받아오기위해 필요

app.use(helmet());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const route              = require('/CryptoWarranty/cw/public/js/route');
const badRequestFallback = require('../../fallback/badrequest-fallback');
const errorFallback      = require('../../fallback/error-fallback');       //error발생시 해당폴더로 넘기기 위해필요

app.use(express.static(__dirname + '/../../', {
    index: `/public/view/index.html`
}));
app.use(route);
app.use(badRequestFallback);
app.use(errorFallback);
console.log(__dirname);



module.exports = app;