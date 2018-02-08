const http = require('http');
const express = require('express');
const exphbs = require('express-handlebars');
var path = require('path');
const port = 3000;

const app = express();


const platform_route = require(path.join(__dirname, 'node/routes/platform.js'));
app.use('/platform',platform_route)


const VIEW_PATH = path.join(__dirname, 'node/views')

console.log(VIEW_PATH)
app.set('views', VIEW_PATH);
app.engine('handlebars', exphbs({ layoutsDir:VIEW_PATH + '/layouts',defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.get('/', function (req, res) {
    res.render('home');
});



app.listen(port,function(){
    console.log("started listening on port", port);
})