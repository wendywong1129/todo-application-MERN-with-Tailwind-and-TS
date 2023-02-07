const express = require("express");
const todoItemController = require("../controllers/todoItem-controllers");

const router = express.Router();

router.get("/", todoItemController.getTodoItems);

router.post("/add", todoItemController.addTodoItem);

router.patch("/:todoId", todoItemController.updateTodoItem);

router.delete("/:todoId", todoItemController.deleteTodoItem);

module.exports = router;
