const express = require('express');
const bodyParser = require('body-parser');
const pgp = require('pg-promise')();
const config = {
    host: 'localhost',
    port: 5432,
    database: 'assessment',
    user: 'postgres'
};
const db = pgp(config)
const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));
app.set('view engine', 'ejs')
app.set('views', 'views')







app.listen(PORT, () => {
  console.log(`Listening. Open http://localhost:${PORT} to view.`);
});