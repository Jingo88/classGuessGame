var express = require('express');
var app = express();
var request = require('request');
var ejs = require('ejs');
var bodyParser = require('body-parser');
app.use(express.static('public'));


app.get('/', function(req, res){
	var celeb = { "results": {
	  	"profession": "star",
	  	"known_for": ["A lot of movies", "talking to an empty chair"],
	  	"gender": "male",
	  	"first letter of first name": "C",
	  	"extra hint": "Has a very attractive son!"
	}
	}

	res.json(celeb);
})

app.get('/Clint_Eastwood', function(req,res){
	var correct = {correct: "LUCK GUESS PUNK"};

	res.json(correct);
})

app.get('/:ANYTHINGELSE', function(req,res){
	var test = {incorrect: "DO YOU FEEL LUCKY?"}

	res.json(test);
})

app.listen(3000);

// app.get ('/user', function(req, res){
// 	res.render('index.ejs');
// })

// app.get('/', function(req, res){

// 	var quotes = {
// 		quote: [{
// 			"text": 'Sometimes I feel like giving up, then I remember I have a lot of motherfuckers to prove wrong',
// 			"author": 'Anonymous',},
// 		{
// 			"text": 'Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway',
// 			"author": 'Earl Nightingale',},
// 		{
// 			"text": "it's not the daily increase, but the daily decrease. Hack away at the unessentials.",
// 			"author": 'Bruce Lee'}]
// 	};
	
// 	var random = Math.floor(Math.random()* quotes['quote'].length)
// 	console.log(random);
// 	var userStuff = quotes['quote'][random]['text'];
// 	res.send(userStuff);
// 	console.log(userStuff)
// });

// // app.post('/', function(req, res){
// // 	var data = req.body.quotes[random];
// // 	console.log('blah blah posting')
	
// // });

// app.listen(3000);




