import { FC } from "react";
import TodoItem from "./TodoItem";

interface TodoListProps {
  data: {
    _id: string;
    description: string;
  }[];
  handleDeleteTodoItem: (todoId: string) => void;
  handleEditTodoItem: (todoId: string, inputValue: string) => void;
}

const TodoList: FC<TodoListProps> = ({
  data,
  handleDeleteTodoItem,
  handleEditTodoItem,
}) => (
  <div className="flex flex-col justify-center items-center gap-4 mt-6">
    {data.map((todoItem) => (
      <TodoItem
        key={todoItem._id}
        _id={todoItem._id}
        text={todoItem.description}
        handleDeleteTodoItem={handleDeleteTodoItem}
        handleEditTodoItem={handleEditTodoItem}
      />
    ))}
  </div>
);

export default TodoList;
