import React from 'react';
import Row from "./Row/Row"
import "./notepad.css";

const Notepad = (props) => {

    function propDrillRemoveEntry(name, timestamp) {
        props.removeNPStringFromNotepadStrings(name, timestamp);
    }

    return (

        <div className="notepad">
            <div className="top-binding"></div>
            <div className="paper">
                <div className="empty-top-margin">
                    <div className="left-margin"></div>
                    <div className="hole-box">
                        <span className="hole"></span>
                        <span className="hole"></span>
                    </div>
                </div>
                <Row
                    notepadStrings={props.notepadStrings[0]}
                    removeEntry={propDrillRemoveEntry}
                />
                <Row
                    notepadStrings={props.notepadStrings[1]}
                    removeEntry={propDrillRemoveEntry}
                />
                <Row
                    notepadStrings={props.notepadStrings[2]}
                    removeEntry={propDrillRemoveEntry}
                />
                <Row
                    notepadStrings={props.notepadStrings[3]}
                    removeEntry={propDrillRemoveEntry}
                />
                <Row
                    notepadStrings={props.notepadStrings[4]}
                    removeEntry={propDrillRemoveEntry}
                />
                <Row
                    notepadStrings={props.notepadStrings[5]}
                    removeEntry={propDrillRemoveEntry}
                />
                <Row
                    notepadStrings={props.notepadStrings[6]}
                    removeEntry={propDrillRemoveEntry}
                />
                <div className="row">
                    <div className="row1">
                        <div className="left-margin"></div>
                        <div className="entry1"></div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Notepad;
