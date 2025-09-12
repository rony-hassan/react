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

## React JSX Attributes

Here class attribute is used as className.

### Usage

- Expressions as Attributes

  You can use JavaScript expressions as attribute values. This is very useful for dynamic attributes.

  ```js
  function Car() {
    const x = "myclass";
    return (
      <h1 className={x}>Hello World</h1>
    );
  }
  ```

- camelCase Event Attributes

  Event attributes in JSX are written in camelCase.

  ```js
  function Car() {
    const myfunc = () => {
      alert('Hello World');
    };
    return (
      <button onClick={myfunc}>Click me</button>
    );
  }
  ```

- Boolean Attributes

  If you pass no value for an attribute, JSX treats it as true. To pass false, you must specify it as an expression.

  Boolean true in JSX, this will make the button disabled:

  ```js
  <button onClick={myfunc} disabled={true}>Click me</button>
  ```

  False in JSX, this will NOT make the button disabled:

  ```js
  <button onClick={myfunc} disabled={false}>Click me</button>
  ```

- The style Attribute

  The style attribute in JSX only accepts a JavaScript object with camelCased CSS property names, rather than a CSS string (as in HTML).

  ```js
  function Car() {
    const mystyles = {
      color: "red",
      fontSize: "20px",
      backgroundColor: "lightyellow",
    };

    return (
      <>
        <h1 style={mystyles}>My car</h1>
      </>
    );
  }
  ```

## [React JSX If Statements](https://www.w3schools.com/react/react_jsx_if_statements.asp)

## React Components

> Components are like functions that return HTML elements.</br> There are two types:

1. Class Components
2. Function Components

### Function Component

- **First Component:**

  ```js
  function Car() {
    return (
      <h2>Hi, I am a Car!</h2>
    );
  }
  ```

- **Rendering the compoent:**

  ```js
  createRoot(document.getElementById('root')).render(
    <Car />
  )
  ```
