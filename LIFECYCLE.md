# Lifecycle of Components

> Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.</br></br>The three phases are: **[Mounting](#mounting)**, **[Updating](#updating)**, and **Unmounting**.

## Mounting

Mounting means putting elements into the DOM.

React has four built-in methods that gets called, in this order, when mounting a component:

1. **[`constructor()`](#constrcutor)**
2. **[`getDerivedStateFromProps()`](#getderivedstatefromprops)**
3. **[`render()`](#render)**
4. **[`componentDidMount()`](#componentdidmount)**

### constrcutor

The `constructor()` method is called before anything else, when the component is initiated, and it is the natural place to set up the initial state and other initial values.

The `constructor()` method is called with the props, as arguments, and you should always start by calling the super(props) before anything else, this will initiate the parent's constructor method and allows the component to inherit methods from its parent `(React.Component)`.

**Example:**

The constructor method is called, by React, every time you make a component:

```js
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  render() {
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }
}

createRoot(document.getElementById('root')).render(
  <Header />
);
```

### getDerivedStateFromProps

The ``getDerivedStateFromProps()`` method is called right before rendering the element(s) in the DOM.

This is the natural place to set the ``state`` object based on the initial ``props``.

It takes ``state`` as an argument, and returns an object with changes to the ``state``.

The example below starts with the favorite color being "red", but the ``getDerivedStateFromProps()`` method updates the favorite color based on the ``favcol`` attribute:

**Example:**

The ``getDerivedStateFromProps`` method is called right before the ``render`` method:

```js
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  static getDerivedStateFromProps(props, state) {
    return {favoritecolor: props.favcol };
  }
  render() {
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }
}

createRoot(document.getElementById('root')).render(
  <Header favcol="yellow"/>
);
```

### render

The render() method is required, and is the method that actually outputs the HTML to the DOM.

**Example:**

A simple component with a simple ``render()`` method:

```js
class Header extends React.Component {
  render() {
    return (
      <h1>This is the content of the Header component</h1>
    );
  }
}

createRoot(document.getElementById('root')).render(
  <Header />
);
```

### componentDidMount

The ``componentDidMount()`` method is called after the component is rendered.

This is where you run statements that requires that the component is already placed in the DOM.

**Example:**

At first my favorite color is red, but give me a second, and it is yellow instead:

```js
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 1000)
  }
  render() {
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }
}

createRoot(document.getElementById('root')).render(
  <Header />
);
```

## Updating

The next phase in the lifecycle is when a component is ***updated***.

A component is updated whenever there is a change in the component's ``state`` or ``props``.

React has five built-in methods that gets called, in this order, when a component is updated:

1. **[`getDerivedStateFromProps()`](#getderivedstatefrompropsupdating)**
2. **[`shouldComponentUpdate()`](#shouldcomponentupdate)**
3. **[`render()`](#renderupdating)**
4. **[`getSnapshotBeforeUpdate()`](#getsnapshotbeforeupdate)**
5. **[`componentDidUpdate()`](#componentdidupdate)**

The ``render()`` method is required and will always be called, the others are optional and will be called if you define them.

### getDerivedStateFromProps(updating)

Also at ***updates*** the ``getDerivedStateFromProps`` method is called. This is the first method that is called when a component gets updated.

This is still the natural place to set the ``state`` object based on the initial props.

The example below has a button that changes the favorite color to blue, but since the ``getDerivedStateFromProps()`` method is called, which updates the state with the color from the favcol attribute, the favorite color is still rendered as yellow:

**Example:**

If the component gets updated, the ``getDerivedStateFromProps()`` method is called:

```js
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  static getDerivedStateFromProps(props, state) {
    return {favoritecolor: props.favcol };
  }
  changeColor = () => {
    this.setState({favoritecolor: "blue"});
  }
  render() {
    return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}

createRoot(document.getElementById('root')).render(
  <Header favcol="yellow" />
);
```

### shouldComponentUpdate

In the ``shouldComponentUpdate()`` method you can return a Boolean value that specifies whether React should continue with the rendering or not.

The default value is ``true``.

The example below shows what happens when the ``shouldComponentUpdate()`` method returns ``false``:

**Example:**

Stop the component from rendering at any update:

```js
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  shouldComponentUpdate() {
    return false;
  }
  changeColor = () => {
    this.setState({favoritecolor: "blue"});
  }
  render() {
    return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}

createRoot(document.getElementById('root')).render(
  <Header />
);
```

**Example:**

Same example as above, but this time the ``shouldComponentUpdate()`` method returns ``true`` instead:

```js
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  shouldComponentUpdate() {
    return false;
  }
  changeColor = () => {
    this.setState({favoritecolor: "blue"});
  }
  render() {
    return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}

createRoot(document.getElementById('root')).render(
  <Header />
);
```

### render(updating)

The ``render()`` method is of course called when a component gets ***updated***, it has to re-render the HTML to the DOM, with the new changes.

The example below has a button that changes the favorite color to blue:

**Example:**

Click the button to make a change in the component's state:

```js
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  changeColor = () => {
    this.setState({favoritecolor: "blue"});
  }
  render() {
    return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}

createRoot(document.getElementById('root')).render(
  <Header />
);
```

### getSnapshotBeforeUpdate

In the ``getSnapshotBeforeUpdate()`` method you have access to the props and state before the update, meaning that even after the update, you can check what the values were before the update.

If the ``getSnapshotBeforeUpdate()`` method is present, you should also include the ``componentDidUpdate()`` method, otherwise you will get an error.

The example below might seem complicated, but all it does is this:

When the component is *mounting* it is rendered with the favorite color "red".

When the component *has been mounted*, a timer changes the state, and after one second, the favorite color becomes "yellow".

This action triggers the *update phase*, and since this component has a ``getSnapshotBeforeUpdate()`` method, this method is executed, and writes a message to the empty DIV1 element.

Then the ``componentDidUpdate()`` method is executed and writes a message in the empty DIV2 element:

**Example:**

Use the ``getSnapshotBeforeUpdate()`` method to find out what the ``state`` object looked like before the update:

```js
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 1000)
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML =
    "Before the update, the favorite was " + prevState.favoritecolor;
  }
  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
    "The updated favorite is " + this.state.favoritecolor;
  }
  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    );
  }
}

createRoot(document.getElementById('root')).render(
  <Header />
);
```

### componentDidUpdate

It's with the ``getSnapshotBeforeUpdate()``

### &copy; All Rights are Reserved By [w3schools](https://www.w3schools.com/)
