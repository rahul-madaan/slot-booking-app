import React from "react";
import {useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";

import axios from "axios";

export const SelectDaysPage = (props) => {
    const [selectedDaysText, setSelectedDaysText] = useState("")
    const [confirmSelectionDisabled, setConfirmSelectionButtonDisabled] = useState(true)


    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    }

    const clickMWF = (e) => {
        e.preventDefault()
        props.setSelectedDaysCode("MWF")
        setConfirmSelectionButtonDisabled(false)
        setSelectedDaysText("Monday, Wednesday, Friday")
    }

    const clickTTS = (e) => {
        e.preventDefault()
        props.setSelectedDaysCode("TTS")
        setConfirmSelectionButtonDisabled(true)
        setSelectedDaysText("Tuesday, Thursday, Saturday")
    }


    const clickConfirmSelection = (e) => {
        e.preventDefault()
        routeChange('/book-slot')
    }

    const verifyLogin = () => {
        axios.post(process.env.REACT_APP_API_URI + process.env.REACT_APP_API_VERSION + "/verify-login", {
            'email_ID': localStorage.getItem("user_emailID"),
        }).then((result) => {
            if (result.data.loginSuccess === 0) {
                routeChange('/login')
                localStorage.removeItem("user_emailID")
            } else if (result.data.statusCode === 1) {
                console.log("Login verified successfully")
            }
        })
    }


    useEffect(() => {
        verifyLogin()
    }, []);


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
                <button type="button" className="btn btn-success btn-lg my-3 mx-3" onClick={clickConfirmSelection} disabled={confirmSelectionDisabled}>Confirm Selection</button>
            </div>

        </>
    )
}
