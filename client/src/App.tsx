import { FC, useEffect, useState } from "react";
import axios from "axios";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Todo from "./models/Todo.module";

const App: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const url = "http://localhost:8050/";

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(url);
      setTodos(data);
    };
    fetchData();
  }, []);

  const handleAddTodoItem = async (inputValue: string) => {
    const addedTodoItem = {
      description: inputValue,
    };

    try {
      const { data } = await axios.post(url + "add", addedTodoItem);
      setTodos((prevTodos) => [...prevTodos, data]);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteTodoItem = async (todoId: string) => {
    try {
      await axios.delete(url + todoId);
      setTodos((prevTodos) =>
        prevTodos.filter((todoItem) => todoItem._id !== todoId)
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleEditTodoItem = async (todoId: string, inputValue: string) => {
    const updateTodoItem = { _id: todoId, description: inputValue };
    try {
      await axios.patch(url + todoId, updateTodoItem);
      setTodos((prevTodos) =>
        prevTodos.map((todoItem) =>
          todoItem._id === todoId ? updateTodoItem : todoItem
        )
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <header className="w-full h-24 bg-yellow-200 flex justify-center items-center">
        <div className="text-center text-4xl font-bold">
          Learn to make Todo App
        </div>
      </header>
      <TodoForm handleAddTodoItem={handleAddTodoItem} />
      <TodoList
        data={todos}
        handleDeleteTodoItem={handleDeleteTodoItem}
        handleEditTodoItem={handleEditTodoItem}
      />
    </div>
  );
};

export default App;
