const express = require('express');
const app = express();
const http = require('http').createServer(app);
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
 'mge-training',
 'root',
 '2242374',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });

app.get('/',(req, res) => {
    res.send('Hello World!');
  });
  
app.get('/about',(req, res) => {
    res.send('about');
});

app.get('/about/contact',(req, res) => {
    res.send('about contact');
});

var server = http.listen(8000, () => {
    console.log('Server is running at port 8000');
});