var express = require('express');
var app = express();
var port = 1313;
var name = {name: 'billy'}


app.set('view engine', 'hbs')

app.get('/', function(req, res, next){
	res.render('index', name)
	res.send('hi')
})

app.listen(port, function(){
	console.log('I am listening at', port )
})
