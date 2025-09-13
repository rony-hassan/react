import Practice from "./PracticeFile";

let x = [1964,1965,1966]
let y = {name: 'Ford', model: 'yz'}
function App() {
  return (
    <div>
      <Practice  years = {x} info = {y}/>
    </div>
  );
}

export default App;
