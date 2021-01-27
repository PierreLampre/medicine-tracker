import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Setter from "../Setter/Setter"
import Notepad from "../Notepad/Notepad"
import NewMedicine from "../NewMedicine/NewMedicine"
import "./views.css"

const Views = () => {

    const [pill, setPill] = useState({
        name: "",
        interval: 0
    }); 
   
    const [pillBox, setPillBox] = useState([]);

    function handleSetPill(name, interval) {
        setPill({
            name: name,
            interval: parseInt(interval)
        });
    }

    if (pill.name !== "" && pill.interval !== 0) {
        setPillBox([...pillBox, pill])
        setPill({name: "", interval: 0})
    } 

    useEffect(() => console.log(pillBox), [pillBox]);

    return (
        <div className="views">
            <BrowserRouter>
                <Setter pillBox={pillBox}/>
                <Switch>
                    <Route exact path="/">
                        <Notepad />
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/new-medicine"> 
                        <NewMedicine pill={pill} passedFunc={handleSetPill}/>
                    </Route>
                </Switch>
            </BrowserRouter>

        </div>
    )
}

export default Views
