const express = require('express');
const app = express();
const http = require('http').createServer(app);

var server = http.listen(8000, () => {
    console.log('Server is running at port 8000');
});