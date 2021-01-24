import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Notepad from "../Notepad/Notepad"
import NewMedicine from "../NewMedicine/NewMedicine"
import "./views.css"

const Views = () => {
    return (
        <div className="views">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Notepad />
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/new-medicine"> 
                        <NewMedicine />
                    </Route>
                </Switch>
            </BrowserRouter>

        </div>
    )
}

export default Views
