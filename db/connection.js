require('dotenv').config()
const mongoose = require('mongoose')

// Connect to database
if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI);
 } else {
    mongoose.connect('mongodb://localhost/Fav_Songs_App');
 }
 mongoose.connection.on('error', function(err) {
    console.error('MongoDB connection error: ' + err);
    process.exit(-1);
 });
 mongoose.connection.once('open', function() {
    console.log("Mongoose has connected to MongoDB!");
 });
 
 //export to mongoose
 module.exports = mongoose