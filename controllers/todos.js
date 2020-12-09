var todos = require('../data/todos');

module.exports = {
  index,
  show,
  create,
  delete: deleteTodo
}

function index(req, res) {
  res.render('index', {title: 'To Do Assessment', todos});
}

function show(req, res) {
  res.render('show', {title: 'To Do', todo: todos[req.params.id], id: req.params.id});
}

function create(req, res) {
  todos.push(req.body.todo);
  res.redirect('/');
}

function deleteTodo(req, res) {
  todos.splice(req.params.id, 1);
  res.redirect('/');
}
