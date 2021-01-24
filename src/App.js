import './App.css';
import Clock from "./components/Clock/Clock"
import Setter from "./components/Setter/Setter"
import Views from "./components/Views/Views"

function App() {

  return (
    <div className="App">
        <h1 className="logo">keep.yourself.alive.</h1>
        <Clock />
        <Setter />
        <Views />
    </div>
  );
}

export default App;
