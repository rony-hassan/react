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
