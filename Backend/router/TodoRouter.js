const express = require("express");
const TodoRouter = express.Router();
const TodoController = require("../controller/TodoController");

//defind routes for post todo
TodoRouter.post("/todo", TodoController.createTodo);
//defind routes for get all todo
TodoRouter.get("/todos", TodoController.getTodos);
module.exports = TodoRouter;
