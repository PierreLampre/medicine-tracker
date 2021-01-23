import './App.css';
import { useState } from "react";
import moment from "moment";
import Clock from "./components/Clock/Clock"
import Setter from "./components/Setter/Setter"
import View from "./components/View/View"

function App() {
  const [time, setTime] = useState(moment()
  .format("LT")
  .toString()
  .toLocaleLowerCase()
  .replace(/\s/g, ""));



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
