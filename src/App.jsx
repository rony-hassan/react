//export default App;
export default Greetings;
import MyList from "./Fruit";
import User from "./Users";

/*function App(){
  return(
    <div className="App">
      <MyList/>
      <User/>
    </div>
  );
} */

// Destructering props

function Greetings({name, age}) {
  return (

    <h1>
      Hello, {name}! You are {age} years old.
    </h1>
    
  );
}
