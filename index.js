var express = require("express"),
	  app = express(),
    bodyParser = require("body-parser"),
    path = require("path"),
    // db = require("./models"),
    // mongoose = require('mongoose'),
    request = require('request'),
   	Twitter = require('twitter'),
    views = path.join(__dirname, "views");
    // session = require("express-session");


app.use("/static", express.static("public"));
app.use("/vendor", express.static("bower_components"));

app.use(bodyParser.urlencoded({extended: true}));


var client = new Twitter({
  consumer_key: "MG8P8LA4OypkpqFn4WW2kwjeV",
  consumer_secret: "C4JaEJWnNkUO6BGuPCOOLjLOxTYEon62eBIPq0jM0juS1Os2Dz",
  access_token_key: "3254380543-aOGnLAN7Dap29B9c3PHbH9zYXGH5drqVgNutKXL",
  access_token_secret: "aBBPsMvaCEX2gKKpUnS8rYHT6v9hbplKOuEWxyfjVWWUH"
});


var params = {screen_name: 'nodejs'};


app.get('/sanFranciscoTweets', function (req, res) {
  client.get('search/tweets', {q: 'TRUMP', language: 'en', geocode: "37.778765,-122.424660,5km"}, function(error, tweets, response) {
      res.send(tweets);
  });
})

app.get('/newYorkTweets', function (req, res) {
  client.get('search/tweets', {q: 'TRUMP', language: 'en', geocode: "40.758007,-73.982391,10km"}, function(error, tweets, response) {
      res.send(tweets);
  });
})

app.get('/washingtonDCTweets', function (req, res) {
  client.get('search/tweets', {q: 'TRUMP', language: 'en', geocode: "38.902745,-77.029781,4mi"}, function(error, tweets, response) {
      res.send(tweets);
  });
})




app.get('/', function (req, res) {						// Auto redirect to Home Page //
	var home = path.join(views, 'home.html');
	res.sendFile(home);
})




app.listen(process.env.PORT || 3000, function () {
    console.log("Yeah Buddy! head to:", this.address().port, app.settings.env);
});


