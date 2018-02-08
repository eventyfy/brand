const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path');
const router = express.Router()
const app = express();
const VIEW_PATH = path.join(__dirname, 'node/views/platform')


app.set('views', VIEW_PATH);
app.engine('handlebars', exphbs({ layoutsDir:VIEW_PATH ,defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', function (req, res) {
  res.render('home')
})
// define the about route
router.get('/about', function (req, res) {
  res.send('About birds')
})

module.exports = router