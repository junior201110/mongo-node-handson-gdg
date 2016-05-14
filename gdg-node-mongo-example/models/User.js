var db = require('mongoose');

var schema = db.Schema({
	name: {type: String,required: true},
	lastName: {type: String, required:false},
	email: {type: String, required:false},
	message: {type: String, required:false}
});

var User = db.model('users',schema);

function getModel() {
	return User;
}

function add (data,callback) {
	var user = new User(data.user);
	user.save((err, data)=>{
		if(!err){
			callback(false,data);
		}else{
			callback(true,err)
		}
	});
}

exports.add = add;
exports.getModel = getModel;
