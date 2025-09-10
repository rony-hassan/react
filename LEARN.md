# Learning Path

## JSX

> It allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChid() methods. It converts HTML tags into react elements.

**Example:**

- With JSX:

    ```javascript

    const myElement = <h1>I Love JSX!</h1>;

    createRoot(document.getElementById('root')).render(
        myElement
    );

    ```

- Without JSX:

    ```javascript

    const myElement = React.createElement('h1', {}, 'I do not use JSX!');

    createRoot(document.getElementById('root')).render(
        myElement
    );

    ```

To Learn More About React JSX, Visit [React JSX](https://www.w3schools.com/react/react_jsx.asp)
