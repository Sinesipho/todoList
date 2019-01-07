'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');

  // todoList Routes
  //get and post methds
  app.route('/tasks')
    .get(todoList.list_all_tasks);

//create a task
    app.route('/tasks/create')
      .post(todoList.create_a_task);
//delete a task
app.route('/tasks/delete')
    .delete(todoList.delete_a_task);

//delete all tasks
  app.route('/tasks/deleteAll')
      .delete(todoList.delete_all_tasks);

//get put and delete metthod
  app.route('/tasks/:taskId')
    .get(todoList.read_a_task);

//update a task
app.route('/tasks/update/')
  .put(todoList.update_a_task);


};
