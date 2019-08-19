var express = require("express");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static('app/public'))

app.get('/', function(req, res) {
        res.sendFile(__dirname + '/app/home.html')
    })
    // require('./app/routing/apiRoutes')(app);
    // require('./app/routing/htmlRoutes')(app);

app.listen(PORT, function() {
    console.log("listening in http://localhost:" + PORT);
});