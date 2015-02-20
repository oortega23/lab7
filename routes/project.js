var models = require('../models');

exports.projectInfo = function(req, res) { 
  var projectID = req.params.id;

  models.Project
  .find()
  .sort('-date')
  .exec(displayPosts);

  function displayPosts(err,blog_posts){
    res.json(blog_posts[0]);

  }



  // query for the specific project and
  // call the following callback

  function afterQuery(err, projects) {
    if(err) console.log(err);
    res.json(projects[0]);
  }
}

exports.addProject = function(req, res) {
  var form_data = req.body;
  console.log(form_data);

  var cool = new models.Project({
    "title": form_data.project_title,
    "image": form_data.image_url,
    "date": form_data.date,
    "summary": form_data.summary 
  });

  cool.save(afterSaving);

  function afterSaving(err){

    if(err){console.log(err);res.send(500);}

    res.send();
  }


  // make a new Project and save it to the DB
  // YOU MUST send an OK response w/ res.send();
}

exports.deleteProject = function(req, res) {
  var projectID = req.params.id;

  models.Project
  .find({"_id" :projectID})
  .remove()
  .exec(afterRemoving);
  function afterRemoving(err){
    if(err){console.log(err)}
      res.send();


  }
  // find the project and remove it
  // YOU MUST send an OK response w/ res.send();
}