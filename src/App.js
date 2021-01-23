import './App.css';
import Clock from "./components/Clock/Clock"
import Setter from "./components/Setter/Setter"
import View from "./components/View/View"

function App() {

  return (
    <div className="App">
        <h1 className="logo">keep.yourself.alive.</h1>
        <Clock />
        <Setter />
        <View />
    </div>
  );
}

export default App;
