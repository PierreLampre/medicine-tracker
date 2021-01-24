import './App.css';
import Clock from "./components/Clock/Clock"
import Views from "./components/Views/Views"

function App() {

  return (
    <div className="App">
        <h1 className="logo">keep.yourself.alive.</h1>
        <Clock />
        <Views />
    </div>
  );
}

export default App;
