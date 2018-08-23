
'use strict';

const express  = require('express');
const request  = require('request');
const xml2json = require('xml2json');
const router   = express.Router();



const Customer = require('/CryptoWarranty/cw/db/customer');
router.get('/flight', (req, res) => {
    request.get(`http://openapi.airport.co.kr/service/rest/FlightScheduleList/getIflightScheduleList?ServiceKey=yrvePP0RJL31%2FPKlCVq4E3AgAy6OeTYOHglaNVEQentZzzk4RzSSDFcWfelP4dPs7%2B4RUd2n1%2FDDcQlf%2Bp9PQw%3D%3D&schDate=${req.query.flightDate}&schFlightNum=${req.query.flightNumber}`, (err, httpres, body) => {
        if (err) {
            console.error(err);
            res.status(500).end();
            return;
        }

        res.status(200).end(xml2json.toJson(body));

        // let start = $(this).find(airport).text();
        // let city  = $(this).find(city).text();

    });
});

router.post('/customers', (req, res) => { //변수명
    const customer              = new Customer();
          customer.first_name   = req.body.first_name;
          customer.last_name    = req.body.last_name;
          customer.email        = req.body.email;
          customer.flightNumber = req.body.flightNumber;
          customer.flightDate   = req.body.flightDate;

    customer.save(err => {
        if (err) {
            console.error(err);
            res.status(500).end();
            return;
        }
        
        res.status(200).end();
    });
});
module.exports = function(app)
{
     app.get('/',function(req,res){
        res.render('index.html')
     });
     app.get('/about',function(req,res){
        res.render('about.html');
    });
}

module.exports = router;