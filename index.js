
var request = require('request');

var headers = {
    'Token':'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6InVzZXIiLCJpc3MiOiJ2cHMiLCJleHAiOjE1MjYwNjQ3MDYsInVzZXJJZCI6ImIyMjJmNjhiLWUyOTktNDU0OS1hZTc4LWY3NmJiMGFiOGQyYiIsImVtYWlsIjoidGVzdHVzZXJAdnBzaS5pbyJ9.zdYt8oNsXwmzTDoUfV01kkTGBsi_m9uVtD_NVoL7UTk',
}

request.post(
    'http://demo-staging.virtualpowersystems.com:9001/v3/sessions',
    { json: { username:"testuser@vpsi.io",password:"testUser1*"} },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
    }
);

var options = {
    url: 'http://demo-staging.virtualpowersystems.com:9001/v3/catalog/device',
    method: 'GET',
    headers: headers,
}
request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        // console.log(body)
        let jsonObject = JSON.parse(body);
        console.log(jsonObject);
    }
})
