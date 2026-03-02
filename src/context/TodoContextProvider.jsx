import { useState, useEffect, useRef } from "react";
import CreateTodoContext from "./createTodoContext";
const TodoContextProvider = ({ children }) => {
  const todoItemRef = useRef("");
  const todoDateRef = useRef("");
  //function to fetch the todo and save it in the useSate hook

  const [todo, setTodo] = useState([
    { todo: "Morning Walk", date: "26-02-2026" },
    { todo: "Go to Evening Walk", date: "26-02-2026" },
  ]);

  //approach-1 : use useState and useRef hook to store the current add element and show in the item list without backend and database
  //set the submit todo data now
  return (
    <CreateTodoContext value={{ todo, setTodo, todoItemRef, todoDateRef }}>
      {children}
    </CreateTodoContext>
  );
};
export default TodoContextProvider;
