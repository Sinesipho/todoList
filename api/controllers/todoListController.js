'use strict';


var mongoose = require('mongoose'),
  Task = mongoose.model('Tasks');

exports.list_all_tasks = function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

//create a task
exports.create_a_task = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

//read a task
exports.read_a_task = function(req, res) {
  Task.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

//update a task
exports.update_a_task = function(req, res) {
  Task.update({_id:req.body._id}, {$set:{name:req.body.newText}}, {multi:false})
  .then(function(data){
   //res.send(data)
 })
};

//remove a task
exports.delete_a_task = function(req, res) {
  Task.deleteOne(
  // _id: req.params.taskId
  req.body
  , function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};

//remove tasks
exports.delete_all_tasks = function(req, res) {
  Task.deleteMany(
  req.body
  , function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Tasks successfully deleted' });
  });
};
