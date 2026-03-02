import { useContext } from "react";
import CreateTodoContext from "../context/createTodoContext";
const TodoInputList = () => {
  const { todoItemRef, todoDateRef, setTodo } = useContext(CreateTodoContext);
  //handleSubmit() function
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      todo: todoItemRef.current.value,
      date: todoDateRef.current.value,
    };
    setTodo((prev) => [...prev, newTodo]);
    todoItemRef.current.value = "";
    todoDateRef.current.value = "";
  };
  return (
    <div className="w-full bg-gray-100 px-4 py-6 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        method="POST"
        className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-6"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Add New Task
        </h2>

        <div className="flex flex-col md:flex-row gap-4">
          {/* Task Input */}
          <input
            type="text"
            name="todo"
            ref={todoItemRef}
            placeholder="Enter the task..."
            className="flex-1 px-4 py-3 rounded-xl border border-gray-300 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 
                       focus:border-transparent transition"
          />

          {/* Date Input */}
          <input
            type="date"
            name="date"
            ref={todoDateRef}
            className="px-4 py-3 rounded-xl border border-gray-300 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 
                       focus:border-transparent transition"
          />

          {/* Button */}
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl 
                       hover:bg-blue-700 active:scale-95 
                       transition duration-200 font-medium"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoInputList;
