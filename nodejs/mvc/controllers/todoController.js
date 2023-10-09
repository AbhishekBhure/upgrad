const Todo = require("../models/todoModel");

const todos = [];

const todoController = {
  getAllTodos(req, res) {
    res.render("index", { todos });
  },

  createTodo(req, res) {
    res.render("create");
  },

  createTodoItem(req, res) {
    const { title } = req.body;
    const todo = new Todo();
    todo.id = todo.length + 1;
    todo.title = title;
    todo.completed = false;
    todos.push(todo);
    res.redirect("/");
  },

  completeTodoItem(req, res) {
    const id = parseInt(req.params.id);
    const todo = todos.find((todo) => todo.id === id);
    if (todo) {
      todo.completed = true;
    }
    res.redirect("/");
  },
};

module.exports = todoController;
