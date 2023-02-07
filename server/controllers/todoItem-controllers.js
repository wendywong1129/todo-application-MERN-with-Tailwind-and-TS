const mongoose = require("mongoose");
const Todo = require("../models/todo");

const getTodoItems = async (req, res) => {
  // TodoModel.find({})
  // .then((todos) => res.json(todos))
  // .catch((err) => console.log(err));
  try {
    const todos = await Todo.find({});
    res.json(todos);
  } catch (err) {
    console.log(err);
  }
};

const addTodoItem = async (req, res) => {
  const { description } = req.body;
  const newTodoItem = new Todo({
    _id: mongoose.Types.ObjectId(),
    description,
  });
  try {
    const addedProduct = await newTodoItem.save();
    res.status(201).json(addedProduct);
  } catch (err) {
    console.log(err);
  }
};

const updateTodoItem = async (req, res) => {
  const { todoId } = req.params;
  const { description } = req.body;

  try {
    const todoItem = await Todo.findById(todoId);
    if (todoItem) {
      todoItem.description = description;
      const updatedTodoItem = await todoItem.save();
      res.json(updatedTodoItem);
    } else {
      res.status(404);
      throw new Error("Cannot find the todoItem");
    }
  } catch (err) {
    console.log(err);
  }
};

const deleteTodoItem = async (req, res) => {
  const { todoId } = req.params;

  try {
    const todoItem = await Todo.findById(todoId);
    if (todoItem) {
      await todoItem.remove();
      res.json({ message: "todoItem is deleted" });
    } else {
      res.status(404);
      throw new Error("Cannot find the todoItem");
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getTodoItems, addTodoItem, updateTodoItem, deleteTodoItem };
