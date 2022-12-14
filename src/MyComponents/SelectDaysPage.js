import React from "react";
import {useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";

import axios from "axios";
import GoogleAd from "./GoogleAd";

export const SelectDaysPage = (props) => {

    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    }

    const clickMWF = (e) => {
        e.preventDefault()
        props.setSelectedDaysCode("MWF")
        props.setConfirmSelectionButtonDisabled(false)
        props.setSelectedDaysText("Monday, Wednesday, Friday")
        localStorage.setItem("selected_days_text","Monday, Wednesday, Friday")
        localStorage.setItem("selected_days_code","MWF")
    }

    const clickTTS = (e) => {
        e.preventDefault()
        props.setSelectedDaysCode("TTS")
        props.setConfirmSelectionButtonDisabled(false)
        props.setSelectedDaysText("Tuesday, Thursday, Saturday")
        localStorage.setItem("selected_days_text","Tuesday, Thursday, Saturday")
        localStorage.setItem("selected_days_code","TTS")
    }


    const clickConfirmSelection = (e) => {
        e.preventDefault()
        routeChange('/book-slot')
    }

    const verifyLogin = () => {
        console.log("login verify started")
        axios.post(process.env.REACT_APP_API_URI + process.env.REACT_APP_API_VERSION + "/verify-login", {
            'encrypted_email_ID': localStorage.getItem("user_emailID"),
            'encrypted_email_ID_len': localStorage.getItem("user_emailID_len")
        }).then((result) => {
            console.log("lol")
            console.log(result.data.loginSuccess)
            if (result.data.loginSuccess === 0) {
                console.log("cant verify email, login again")
                routeChange('/login')
                localStorage.removeItem("user_emailID")
                localStorage.removeItem("user_emailID_len")
            } else if (result.data.loginSuccess === 1) {
                props.setUserSNUID(result.data.user_emailID)
                console.log(result.data.user_emailID)
                console.log("Login verified successfully")
            }
        }).catch(error => {
            console.log(error.response)
            routeChange('/login')
        })
    }


    useEffect(() => {
        verifyLogin()
    }, []);


    return (<>
            <GoogleAd slot="98903887532" classNames="page-top" />
            <br/>
            <br/>
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

            {props.selectedDaysText !== "" ? <div className="container h-100 d-flex justify-content-center ">
                <h5>Selected days: {props.selectedDaysText}</h5>
            </div> : null}

            <div className="container h-100 d-flex justify-content-center ">
                <button type="button" className="btn btn-success btn-lg my-3 mx-3" onClick={clickConfirmSelection} disabled={props.confirmSelectionDisabled}>Confirm Selection</button>
            </div>
            <GoogleAd slot="989238934" classNames="page-bottom" />
        </>
    )
}
