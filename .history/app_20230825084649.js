const express = require('express');
const app = express();
const http = require('http').createServer(app);

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