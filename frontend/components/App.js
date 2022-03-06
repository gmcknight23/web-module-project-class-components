import React from "react";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <ul>
          <li>Walk the dog</li>
          <li>Cook Dinner</li>
          <li>Go to Gym</li>
        </ul>
        <form>
          <input />
          <button>Add</button>
          <button>Clear</button>
        </form>
      </div>
    );
  }
}
