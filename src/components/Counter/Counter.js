import { useState, useCallback } from "react";
import Todo from "./Todo";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [todos, setTodos] = useState([]);

  const incrementHandler = () => {
    setCounter((c) => c + 1);
  };
  const addTodoHandler = useCallback(() => {
    setTodos((t) => [...t, "todo"]);
  }, [todos]);

  return (
    <>
      <Todo todos={todos} addTodos={addTodoHandler} />

      <br />

      <div>
        Value: {counter}
        <button onClick={incrementHandler}>+</button>
      </div>
    </>
  );
};

export default Counter;
