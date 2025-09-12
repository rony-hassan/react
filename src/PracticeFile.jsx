import React from "react";
/*
function Practice() {

  const headerstyle = {
    color: 'red',
    backgroundColor: 'lightblue'
  }

  const myElement = (
    <>
      <h1 style={headerstyle}>Hello World!</h1>
      <p>My Name is Rony</p>
      <input type="text" />
    </>
  );

  return myElement;
}

export default Practice;
*/

class Practice extends React.Component {
  constructor() {
    super();
    this.state = { color: "red" };
  }

  render() {
    return <h2>Color of my car is {this.state.color}</h2>;
  }
}

export default Practice;
