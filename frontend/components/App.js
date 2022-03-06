import React from "react";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          name: "Organize Garage",
          id: 1528817077286, // could look different, you could use a timestamp to generate it
          completed: false,
        },
        {
          name: "Bake Cookies",
          id: 1528817084358,
          completed: false,
        },
        {
          name: "trash",
          id: 1528817084359,
          completed: false,
        },
        {
          name: "gym",
          id: 1528815084353,
          completed: false,
        },
      ],
    };
  }
  render() {
    const { todos } = this.state;
    console.log(todos);

    return (
      <div>
        <h1>TODOS</h1>
        <ul>
          {todos.map((todo) => {
            return <li>{todo.name}</li>;
          })}
        </ul>
        <form>
          <input />
          <button>Add</button>
        </form>
        <button>Clear</button>
      </div>
    );
  }
}
