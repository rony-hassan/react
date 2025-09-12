// React Class Component State

// Creating the state object
import React from "react";

class Practice extends React.Component {
  constructor() {
    super();
    // The state object can contain as many properties as user like

    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964,
    };
  }

  // Changing the state object
  /* Always use the setState() method to change the state object, it will ensure that the component knows its been updated and calls the render() method (and all the other lifecycle methods). */

  changeColor = () => {
    this.setState(
      this.state.color == "red" ? { color: "blue" } : { color: "red" }
    );
  };

  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color} {this.state.model} from {this.state.year}.
        </p>
        <button type="button" onClick={this.changeColor}>
          Change color
        </button>
      </div>
    );
  }
}

export default Practice;
