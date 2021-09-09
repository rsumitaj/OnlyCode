const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/OnlyCode_development');

const db = mongoose.connection;

db.on('error', console.error.bind(console,"Error connecting to mongodb"));

db.once('open', function(){
  console.log("Connected to database : Mongodb");
});

module.exports = db;