const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const User = require("./src/modules/users/models/user.model");
const Group = require("./src/modules/groups/models/group.model");

const app = express();
const port = process.env.port || 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/collections', {useNewUrlParser: true}); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require("./src/modules/users/routes/user.route");
const routes2 = require("./src/modules/groups/routes/group.route");
routes(app);
routes2(app);

if (process.env.NODE_ENV !== 'test') {
    app.listen(port);
}

module.exports.app = app;
console.log("Server started on port " + port);
