const express = require("express");
const todoController = require("./controllers/todoController");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.urlencoded({ extended: true }));

app.get("/", todoController.getAllTodos);
app.get("/create", todoController.createTodo);
app.post("/create", todoController.createTodoItem);
app.get("/complete/:id", todoController.completeTodoItem);

app.listen(PORT, () => {
  console.log(`App running at Port: ${PORT}`);
});
