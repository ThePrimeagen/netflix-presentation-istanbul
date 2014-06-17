// web.js
var express = require("express");
var app = express();

app.use("/", express.static(__dirname + "/coverage/lcov-report"));
app.listen(3333, function() {
    console.log("Listening on " + 3333);
});
