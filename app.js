require('dotenv').config();

const PORT = process.env.PORT || 8080;

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get("/", function(req, res){
  res.render("index", { testvar: 'WORKS FINE.' });
});

app.post('/search', (req, res) => {
  const search = req.body.search;

  res.render("statistics", { search });
});

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}`)
});