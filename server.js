var _port=1993;
var express=require('express');
var wines=require('./routes/wines');
var app=express();

/*
app.configure(function(){
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
});
*/
/*
process.env.NODE_ENV;
app.get('env');
*/
app.get('/wines',wines.findAll);
app.get('/wines/:id',wines.findById);
app.post('/wines',wines.addWine);
app.put('/wines/:id',wines.updateWine);
app.delete('/wines/:id',wines.deleteWine);


app.listen(_port);
console.log('listening on port'+_port);

