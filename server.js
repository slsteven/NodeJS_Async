var express = require('express');
var app = express();
var path        = require('path');
var bodyParser  = require("body-parser");
var request     = require('request');
var cheerio     = require('cheerio');
var async       = require('async');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


var urls = [
"http://ebay.com/itm/131485855001",
"http://ebay.com/itm/401029394423",
"http://ebay.com/itm/401031962870",
"http://ebay.com/itm/272077975326",
"http://ebay.com/itm/311537168622",
"http://ebay.com/itm/141835941810",
"http://ebay.com/itm/151969939304"
];

//returns "Done" before query results.
app.get('/query1', function(err, res){
  for(var i = 0; i < urls.length; i++){
    request(urls[i], function(error, response, html){
      //check for errors
      if(!error){
        //utilize the cheerio library on returned html
        var $ = cheerio.load(html);
        $('.it-ttl').filter(function(){
          var data = $(this);
          title = data.text().slice(16);
          console.log(title)
        })
      }
    })
  }
  done("query1");
})

//test method 1: async.each()
//returns "Done" after queries
app.get('/query2', function(err, res){
  async.each(urls,
    function(url, callback){
      request(url, function(error, response, html){
        //check for errors
        if(!error){
          //utilize the cheerio library on returned html
          var $ = cheerio.load(html);
          $('.it-ttl').filter(function(){
            var data = $(this);
            title = data.text().slice(16);
            console.log(title)
            callback();
          })
        }
      })
    },
    function(){
      done("query2");
    }
  );
})

//test method 2: using simple counter
//returns "Done" after queries
app.get('/query3', function(err, res){
  var counter = urls.length;
  var count = 0;
  for(var i = 0; i < urls.length; i++){
    request(urls[i], function(error, response, html){
      //check for errors
      if(!error){
        //utilize the cheerio library on returned html
        var $ = cheerio.load(html);
        $('.it-ttl').filter(function(){
          var data = $(this);
          title = data.text().slice(16);
          console.log(title)
          count++;
          if(count === counter){
            done("query3");
          }
        })
      }
    })
  }
})

//test method 3: using a Promises

function done(x){
  console.log("Done", x)
}

app.listen(8000, function() {
  console.log('cool stuff on: 8000');
});

