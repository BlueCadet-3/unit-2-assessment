var todos = require('../data/todos');

module.exports = {
  index,
  create,
  delete: deleteTodo
}

function index(req, res) {
  res.render('index', {title: 'To Do Assessment', todos});
}

function create(req, res) {
  todos.push(req.body.todo);
  res.redirect('/');
}

function deleteTodo(req, res) {
  todos.splice(req.params.id, 1);
  res.redirect('/');
}
