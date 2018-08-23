
'use strict';
require('../../gulpfile');

const http    = require('http');
var   express = require('express');
const app     = require('/CryptoWarranty/cw/public/js/app');
const server  = http.createServer(app);





const database = require('/CryptoWarranty/cw/public/js/database');
database(() => {
    console.log('Connected to the database server.');

    const port = process.env.PORT || 80;

    server.listen(port, () => {
        console.log(`Server is running on port ${port}.`);
    });

});

