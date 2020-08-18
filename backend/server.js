const express = require('express');
const app = express();
const sequelize = require('./config/dbConfig')
const port = 3000;

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



app.listen(port, () => console.log(`app listening on port ${port}!`));

exports = module.exports = app;