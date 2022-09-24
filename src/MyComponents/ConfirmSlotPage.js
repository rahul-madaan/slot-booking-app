import React from "react";
import {useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";

import axios from "axios";

export const ConfirmSlotPage = (props) => {

    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    }

    const clickYes = (e) => {
        e.preventDefault()
    }

    const clickNo = (e) => {
        e.preventDefault()
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
        })
    }

    const updateSelectedDays = () => {
        if(localStorage.getItem("selected_days_code") === null || localStorage.getItem("selected_days_text")=== null) {
            console.log("days code and text not found in local storage")
            routeChange('/select-days')
        }
        else{
            props.setSelectedDaysCode(localStorage.getItem("selected_days_code"))
            props.setSelectedDaysText(localStorage.getItem("selected_days_text"))
            props.setConfirmSelectionButtonDisabled(false)
        }
    }


    useEffect(() => {
        verifyLogin()
        updateSelectedDays()
    }, []);


    return (<>
            <div className="container h-100 d-flex justify-content-center">
                <h3>Confirm Selected Slot</h3>
            </div>
            <h4>your slot details here</h4>
            <div className="container h-100 d-flex justify-content-center">
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-success my-3" onClick={clickYes}>   Yes   </button>
                    <button type="button" className="btn btn-danger my-3" onClick={clickNo}>   No   </button>
                </div>
                <br/>
                <br/>
            </div>
        </>
    )
}
