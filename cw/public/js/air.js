let request = require("request");
let cheerio = require("cheerio");

const $url = 'http://openapi.airport.co.kr/service/rest/IflightScheduleList/get IflightScheduleList';
const $KEY = 'yrvePP0RJL31%2FPKlCVq4E3AgAy6OeTYOHglaNVEQentZzzk4RzSSDFcWfelP4dPs7%2B4RUd2n1%2FDDcQlf%2Bp9PQw%3D%3D';


//요청
const $FlightNum  = '항공편 넘버';
const $FLightDate = '출발일자';

//응답
const $airport = '';
const $city    = '';

const $api_url = $url + '?servicekey='+ $KEY + '&schFlightNum=' + $FlightNum + '&schDate=' + $FLightDate;


request($api_url, function(err,res,body){
    $ = cheerio.load(body);

    $('airArrayList').each(function(idx) {
        let start = $(this).find(airport).text();
        let city  = $(this).find(city).text();
        console.log('${start}. ${city}');
    });
});