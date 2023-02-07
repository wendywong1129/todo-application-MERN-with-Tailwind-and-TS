import { FC, FormEvent, useRef } from "react";

interface TodoFormProps {
  handleAddTodoItem: (inputValue: string) => void;
}

const TodoForm: FC<TodoFormProps> = ({ handleAddTodoItem }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleTodoSubmit = (event: FormEvent) => {
    event?.preventDefault();

    const inputValue = inputRef.current!.value.trim();
    if (!inputValue) return;
    handleAddTodoItem(inputValue);
    inputRef.current!.value = "";
  };

  return (
    <form
      className="w-full flex justify-center items-center gap-4 mt-6"
      onSubmit={handleTodoSubmit}
    >
      <input
        className="p-2 border rounded-md"
        type="text"
        placeholder="Please Type and Text"
        ref={inputRef}
      />
      <button
        className="px-4 py-2 rounded font-bold text-white bg-blue-700"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default TodoForm;
