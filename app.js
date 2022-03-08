const express = require('express')
const bodyParser = require('body-parser')
const date = require(__dirname+'/date.js')

const app = express()
const port = 3000

var items = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"))
app.set('view engine', 'ejs')

//handling the request on home route
app.get('/', (req, res) => {
  let datetoday = date();
  res.render('list', {
    datetoday: datetoday,
    newListItems: items
  });
})

//handling the post
app.post('/', function(req, res) {
  var item = req.body.newItem;
  items.push(item)
  res.redirect("/")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
