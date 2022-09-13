import React from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

export const SelectDaysPage = (props) => {
    const [selectedDaysText, setSelectedDaysText] = useState("")


    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    }

    const clickMWF = (e) => {
        e.preventDefault()
        setSelectedDaysCode("MWF")
        setSelectedDaysText("Monday, Wednesday, Friday")
    }

    const clickTTS = (e) => {
        e.preventDefault()
        setSelectedDaysCode("TTS")
        setSelectedDaysText("Tuesday, Thursday, Saturday")
    }


    const clickConfirmSelection = (e) => {
        e.preventDefault()
        routeChange('/book-slot')
    }


    return (<>
            <div className="container h-100 d-flex justify-content-center">
                <h3>Select Preferred Days</h3>
            </div>
            <div className="container h-100 d-flex justify-content-center">
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-warning my-3" onClick={clickMWF}>M W F</button>
                    <button type="button" className="btn btn-primary my-3" onClick={clickTTS}>T T S</button>
                </div>
                <br/>
                <br/>
            </div>

            {selectedDaysText !== "" ? <div className="container h-100 d-flex justify-content-center ">
                <h5>Selected days: {selectedDaysText}</h5>
            </div> : null}

            <div className="container h-100 d-flex justify-content-center ">
                <button type="button" className="btn btn-success btn-lg my-3 mx-3">Confirm Selection</button>
            </div>

        </>
    )
}
