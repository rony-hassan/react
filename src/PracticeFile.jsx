//componentDidMount

import React from "react";

class Practice extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favouritecolor: "red" };
  }

  static getDerivedStateFromProps(props, state) {
    return { favouritecolor: props.favcol };
  }

  changeColor = () => {
    this.setState({ favouritecolor: "blue" });
  };

  render() {
    return (
      <div>
        <h1>My favourite color is {this.state.favouritecolor}</h1>
        <button type="button" onClick={this.changeColor}>
          Change
        </button>
      </div>
    );
  }
}

export default Practice;
