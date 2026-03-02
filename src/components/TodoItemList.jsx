import { useContext } from "react";
import CreateTodoContext from "../context/createTodoContext";
const TodoItemList = () => {
  const todoList = useContext(CreateTodoContext);
  //get the todo item
  const { todo, setTodo } = todoList;
  const handleDelete = (deleteItem) => {
    setTodo((prev) => prev.filter((item) => item.todo !== deleteItem));
  };
  console.log(todo);
  return (
    <div className="w-full max-w-2xl mx-auto mt-6 bg-white shadow-lg rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="grid grid-cols-3 bg-gray-100 px-6 py-3 text-sm font-semibold text-gray-600">
        <span>Task</span>
        <span>Date</span>
        <span className="text-right">Action</span>
      </div>

      {/* Todo Row */}
      {todo.map((item) => (
        <div
          key={item.todo}
          className="grid grid-cols-3 items-center px-6 py-4 border-t hover:bg-gray-50 transition"
        >
          {/* Task */}
          <span className="text-gray-800 font-medium">{item.todo}</span>

          {/* Date */}
          <span className="text-gray-500">{item.date}</span>

          {/* Action */}
          <div className="text-right">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-lg 
                             hover:bg-red-600 active:scale-95 
                             transition text-sm"
              onClick={() => handleDelete(item.todo)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoItemList;
