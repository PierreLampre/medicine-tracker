import React from 'react'

const Row = (props) => {

    return (
        <div className="row">
            {props.notepadStrings !== undefined
                ?
                <>
                    <div className="row1">
                        <div className="left-margin"></div>
                        <div className="entry1">You took {props.notepadStrings.name} at {props.notepadStrings.timeStamp}</div>
                    </div>
                    <div className="row2">
                        <div className="left-margin"></div>
                        <div className="entry2">You take {props.notepadStrings.name} again at {props.notepadStrings.addedTimeStamp}</div>
                    </div>
                </>
                :
                <>
                    <div className="row1">
                        <div className="left-margin"></div>
                        <div className="entry1"></div>
                    </div>
                    <div className="row2">
                        <div className="left-margin"></div>
                        <div className="entry2"></div>
                    </div>
                </>
            }
        </div>
    )
}

export default Row
