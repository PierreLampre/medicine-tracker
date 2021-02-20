import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Setter from "../Setter/Setter";
import Notepad from "./Notepad/Notepad";
import NewMedicine from "./NewMedicine/NewMedicine";
import EditMedicine from "./EditMedicine/EditMedicine";
import moment from "moment";
import "./views.css";

const Views = () => {

    const [pill, setPill] = useState({
        name: "",
        interval: 0
    });

    const [pillBox, setPillBox] = useState([]);
    const [pillIndex, setPillIndex] = useState(null);
    const [notepadStrings, setNotepadStrings] = useState([]);
    const [localStorageBool, setLocalStorageBool] = useState(false);

    // gets pillBox & notepadStrings from local storage    
    useEffect(() => {
        let savedPillBox = localStorage.getItem("pillBox");

        if (savedPillBox !== null) {
            let parsedPillBox = JSON.parse(savedPillBox)
            setPillBox(parsedPillBox);
        }
    }, [])

    useEffect(() => {
        let savedNotepadStrings = localStorage.getItem("notepadStrings");

        if (savedNotepadStrings !== null) {
            let parsedNotepadStrings = JSON.parse(savedNotepadStrings)
            setNotepadStrings(parsedNotepadStrings);
        }
    }, [])

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
        setPill({ name: "", interval: 0 })
    }

    function handlePillIndexViews(index) {
        setPillIndex(index);
    }

    //removes pill from pillBox and updates localStorage
    // then pulls new LS into app
    function removePillFromPillBox(index) {
        pillBox.splice(index, 1);
        let stringifiedPillBox = JSON.stringify(pillBox);
        localStorage.setItem("pillBox", stringifiedPillBox);
        let savedPillBox = localStorage.getItem("pillBox");

        if (savedPillBox !== null) {
            let parsedPillBox = JSON.parse(savedPillBox)
            setPillBox(parsedPillBox);
        }
    }

    function removeNPStringFromNotepadStrings(name, timestamp) {
        console.log("name: " + name)
        console.log("timestamp: " + timestamp)
        for (let i = 0; i < notepadStrings.length; i++) {

            if (notepadStrings[i].name === name && notepadStrings[i].timeStamp === timestamp) {
                notepadStrings.splice(i, 1);
                setLocalStorageBool(true);
            }
        }
    }

    function pushToNotepadStrings() {

        let timeStamp = moment()
            .format("LT")
            .toString()
            .toLocaleLowerCase()
            .replace(/\s/g, "") + " on " + moment().format("MMM").toString() + " " +
            moment().format("D").toString();

        let addedTimeStamp = moment().add(pillBox[pillIndex].interval, "h")
            .format("LT")
            .toString()
            .toLocaleLowerCase()
            .replace(/\s/g, "");

        notepadStrings.push({
            name: pillBox[pillIndex].name,
            int: pillBox[pillIndex].interval,
            timeStamp: timeStamp,
            addedTimeStamp: addedTimeStamp
        });

        setLocalStorageBool(true);

    }

    //saves pillBox & notepadStrings to localStorage
    useEffect(() => {

        if (pillBox.length > 0) {
            let stringifiedPillBox = JSON.stringify(pillBox);
            localStorage.setItem("pillBox", stringifiedPillBox);
        }

    }, [pillBox])

    useEffect(() => {
        if (localStorageBool) {
            let stringifiedNotepadStrings = JSON.stringify(notepadStrings);
            localStorage.setItem("notepadStrings", stringifiedNotepadStrings);
            setLocalStorageBool(false);
        }

    }, [notepadStrings, localStorageBool])

    return (
        <div className="views">
            <BrowserRouter>
                <Setter
                    pillBox={pillBox}
                    handlePillIndexViews={handlePillIndexViews}
                />
                <Switch>
                    <Route exact path="/">
                        <Notepad
                            notepadStrings={notepadStrings}
                            removeNPStringFromNotepadStrings={removeNPStringFromNotepadStrings}
                        />
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/new-medicine">
                        <NewMedicine pill={pill} passedFunc={handleSetPill} />
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/edit-medicine">
                        <EditMedicine
                            pillBox={pillBox}
                            pillIndex={pillIndex}
                            pushToNotepadStrings={pushToNotepadStrings}
                            removePillFromPillBox={removePillFromPillBox}
                        />
                    </Route>
                </Switch>
            </BrowserRouter>

        </div>
    )
}

export default Views
