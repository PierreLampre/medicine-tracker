import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Setter from "../Setter/Setter"
import Notepad from "./Notepad/Notepad"
import NewMedicine from "./NewMedicine/NewMedicine"
import EditMedicine from "./EditMedicine/EditMedicine"
import "./views.css"

const Views = () => {

    const [pill, setPill] = useState({
        name: "",
        interval: 0
    }); 
   
    const [pillBox, setPillBox] = useState([]);
    const [pillIndex, setPillIndex] = useState(null);
    const [timeStampBoolean, setTimeStampBoolean] = useState(false);

    //sets pill to be loaded into pillBox
    function handleSetPill(name, interval) {
        setPill({
            name: name,
            interval: parseInt(interval)
        });
    }

    //boolean-esque logic to place pill in pillBox when values of pill are changed
    //once a pill is added, the values are reset to initial state
    if (pill.name !== "" && pill.interval !== 0) {
        setPillBox([...pillBox, pill])
        setPill({name: "", interval: 0})
    }

    function handlePillIndexViews(index) {
        setPillIndex(index)
    }

    function toggleTimeStampBoolean() {
        if(timeStampBoolean) {
            setTimeStampBoolean(false);
        } else {
            setTimeStampBoolean(true);
         }
    }

    return (
        <div className="views">
            <BrowserRouter>
                <Setter 
                    pillBox={pillBox} 
                    handlePillIndexViews={handlePillIndexViews}
                />
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
                <Switch>
                    <Route path="/edit-medicine"> 
                        <EditMedicine pillBox={pillBox} pillIndex={pillIndex}/>
                    </Route>
                </Switch>
            </BrowserRouter>

        </div>
    )
}

export default Views
