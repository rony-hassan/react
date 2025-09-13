//componentDidMount

import React from "react";

class Practice extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favouritecolor: "red" };
  }

  componentDidMount() {
    setTimeout(() =>
    this.setState({favouritecolor: 'yellow'}),1000);
  }

  render() {
    return <h1>My favourite color is {this.state.favouritecolor}</h1>;
  }
}

export default Practice;
