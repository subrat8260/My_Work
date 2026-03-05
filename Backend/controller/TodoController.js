const Todo = require("../model/TodoSchema");
exports.createTodo = async (req, res) => {
  try {
    const { title, description, priority } = req.body;
    const todo = new Todo({
      title,
      description,
      priority,
      user: req.user._id,
    });
    await todo.save();
    res.status(201).json({ message: "Todo created succeessfully", todo });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//define controller for get all todo
exports.getTodos = async (req, res) => {
  try {
    const { priority } = req.query;
    let filter = { user: req.user._id };
    if (priority) {
      filter.priority = priority;
    }
    const todos = await Todo.find(filter);
    res.status(200).json({ count: todos.length, data: todos });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
