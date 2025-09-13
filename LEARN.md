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

- **Rendering the component:**

  ```js
  createRoot(document.getElementById('root')).render(
    <Car />
  )
  ```

- **Props:**

  ```js
  function Car(props) {
    return (
      <h2>I am a {props.color} Car!</h2>
    );
  }

  createRoot(document.getElementById('root')).render(
    <Car color="red"/>
  );
  ```

- **Components in Components:**

  ```js
  function Car() {
    return (
      <h2>I am a Car!</h2>
    );
  }

  function Garage() {
    return (
      <>
        <h1>Who lives in my Garage?</h1>
        <Car />
      </>
    );
  }

  createRoot(document.getElementById('root')).render(
    <Garage />
  );
  ```

### Class Component

> Before React 16.8, Class components were the only way to track state and lifecycle on a React component. Function components were considered "state-less".</br></br>With the addition of Hooks, Function components are now almost equivalent to Class components. The differences are so minor that you will probably never need to use a Class component in React.</br></br>The component has to include the extends React.Component statement, this statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.

- **Component Constructor**

  ```js
  class Car extends React.Component {
    constructor() {
      super();
      this.state = {color: "red"};
    }
    render() {
      return <h2>I am a {this.state.color} Car!</h2>;
    }
  }
  ```

- **Props in the Constructor**

  > If your component has a constructor function, the props should always be passed to the constructor and also to the React.Component via the super() method.

  ```js
  class Car extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <h2>I am a {this.props.model}!</h2>;
    }
  }

  createRoot(document.getElementById('root')).render(
    <Car model="Mustang"/>
  );
  ```

To learn More about React Components and state object [Click React Class](https://www.w3schools.com/REACT/react_class.asp)

## Other Resources

1. [``React Props``](https://www.w3schools.com/react/react_props.asp)

    > React props can be of any data type, including variables, numbers, strings, objects, arrays, and more.</br></br>Strings can be sent inside quotes as in the examples above, but numbers, variables, and objects need to be sent inside `curly brackets`.</br></br>
    > 📝 **Note:** React Props are read-only! You will get an error if you try to change their value.

2. [`React Destructuring Props`](https://www.w3schools.com/react/react_props_destructuring.asp)

    📝 **Note:** You can limit the properties a component receives by using destructuring. React uses ``curly brackets`` to destructure props: {color}.

    You can also destruct the properties you need inside the component.

    This way, the component receives all the properties, but the destructuring makes sure it only uses the ones it needs.

    ```js
    function Car(props) {
      const {brand, model} = props;
      return (
        <h2>I love my {brand} {model}!</h2>
      );
    }

    createRoot(document.getElementById('root')).render(
      <Car brand="Ford" model="Mustang" color="red" year={1969} />
    );
    ```

    When you don't know how many properties you will receive, you can use the ``...rest`` operator.

    Meaning: you can specify the properties you need, and the rest will be stored in an object.

    Example:

    The component specifies the color and the brand, but the rest is stored in an object like this:
    ``{ model: "Mustang", year: 1969 }``.

    ```js
    function Car({color, brand, ...rest}) {
      return (
        <h2>My {brand} {rest.model} is {color}!</h2>
      );
    }

    createRoot(document.getElementById('root')).render(
      <Car brand="Ford" model="Mustang" color="red" year={1969} />
    );
    ```
