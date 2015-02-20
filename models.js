
var Mongoose = require('mongoose');


var ProjectSchema = new Mongoose.Schema({

	"title": String,
	"date": Date,
	"summary": String,
	"image": String
  
  // fields are defined here
});

exports.Project = Mongoose.model('Project', ProjectSchema);


