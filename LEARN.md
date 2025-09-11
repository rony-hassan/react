# Learning Path

## JSX

> It allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChid() methods. It converts HTML tags into react elements.

**Example:**

- With JSX:

  ```javascript
  const myElement = <h1>I Love JSX!</h1>;

  createRoot(document.getElementById("root")).render(myElement);
  ```

- Without JSX:

  ```javascript
  const myElement = React.createElement("h1", {}, "I do not use JSX!");

  createRoot(document.getElementById("root")).render(myElement);
  ```

To Learn More About React JSX, Visit [React JSX](https://www.w3schools.com/react/react_jsx.asp)

## React JSX Expressions

### Expressions

```jsx
function Car() {
  return (
    <>
      <h1>My car</h1>
      <p>It has {218 * 1.36} horsepower</p>
    </>
  );
}
```

### Variables

```javascript
function Car() {
  const hp = 218 * 1.36;
  return (
    <>
      <h1>My car</h1>
      <p>It has {hp} horsepower</p>
    </>
  );
}
```

### Function Calls

```javascript
function kwtohp(kw) {
  return kw * 1.36;
}

function Car() {
  return (
    <>
      <h1>My car</h1>
      <p>It has {kwtohp(218)} horsepower</p>
    </>
  );
}
```

### Object Properties

```js
function Car() {
  const myobj = {
    name: "Fiat",
    model: "500",
    color: "white",
  };
  return (
    <>
      <h1>
        My car is a {myobj.color} {myobj.name} {myobj.model}
      </h1>
    </>
  );
}
```

Learn in details about [React JSX Expressions](https://www.w3schools.com/react/react_jsx_expressions.asp)
