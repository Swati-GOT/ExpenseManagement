var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var sequelize = require('./config/dbConfig')

var port = 3001;

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, X-Amz-Date, x-requested-with, authToken");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));

require('./routes')(app);

app.listen(port, () => console.log(`app listening on port ${port}!`));

exports = module.exports = app;