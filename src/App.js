import React, { useState } from "react";
import "./App.css";

function Todo({ todo, index, completeTodo }) {
  // Todo component to be render in the return/render section
  // Todo component get the text value from each todo of the list
  // initial rener and render of todos
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      onClick={() => completeTodo(index)}
    >
      {todo.text}
    </div>
  );
}

//creating the function form, taking one prop
//the addTodo method so we can add a todo
// inside brackets because we are destructuring from the props

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    if (!value) return;

    //takes the value of the form and send it to the list
    addTodo(value);
    setValue("");
  };

  //creating the form in the DOM with div elements
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Type something..."
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function App() {
  // Each component of the list with properties
  const [todos, setTodos] = useState([
    {
      text: "To do object 1",
      isCompleted: false
    },
    {
      text: "To do object 2",
      isCompleted: false
    },
    {
      text: "To do object 3",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  // map through each component of the list and render
  // the component todo cf => Todo comp

  return (
    <div className="App">
      <div className="App-header">
        <h1> To Do List </h1>
        <div className="todo-list">
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
            />
          ))}
          <TodoForm addTodo={addTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
