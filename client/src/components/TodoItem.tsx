import { FC, useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import { FiEdit } from "react-icons/fi";

interface TodoItemProps {
  _id: string;
  text: string;
  handleDeleteTodoItem: (todoId: string) => void;
  handleEditTodoItem: (todoId: string, inputValue: string) => void;
}

const TodoItem: FC<TodoItemProps> = ({
  _id,
  text,
  handleDeleteTodoItem,
  handleEditTodoItem,
}) => {
  const [inputText, setInputText] = useState<string>(text);

  const updateInputValue = () => {
    const text = prompt("Please Input Text");
    if (text === null) return;
    setInputText(text);
    handleEditTodoItem(_id, text);
  };

  return (
    <div className="w-64 px-6 py-4 bg-purple-500 flex justify-between items-center">
      <div className="font-bold text-white">{inputText}</div>
      <div className="flex justify-center items-center gap-2">
        <ImCancelCircle
          size={"1.5rem"}
          color="white"
          onClick={() => {
            handleDeleteTodoItem(_id);
          }}
        />
        <FiEdit size={"1.5rem"} color="white" onClick={updateInputValue} />
      </div>
    </div>
  );
};

export default TodoItem;
