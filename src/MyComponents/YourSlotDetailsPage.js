import React from "react";
import {useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";

import axios from "axios";

export const YourSlotDetailsPage = (props) => {
    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
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

    //make function to call api to fetch slot details

    useEffect(() => {
        verifyLogin()
    }, []);


    return (<>
            <div className="container h-100 d-flex justify-content-center">
                <h3>Confirm Selected Slot</h3>
            </div>
            <h4>Your slot details</h4>
            <ul className="list-group">
                <li className="list-group-item">Selected Days : {props.selectedDaysText}</li>
                <li className="list-group-item">Selected Time Slot : {props.selectedSlotText}</li>
                <li className="list-group-item">Email: {props.userSNUID}</li>
            </ul>
        </>
    )
}
