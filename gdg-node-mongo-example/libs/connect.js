var Mongoose = require('mongoose');

var db = Mongoose.connection;



function tryConnect(callback) {
	db.on('error', callback);
	db.once('open', callback);
	Mongoose.connect('mongodb://localhost:27017/gdgExample');
}

exports.tryConnect = tryConnect;
