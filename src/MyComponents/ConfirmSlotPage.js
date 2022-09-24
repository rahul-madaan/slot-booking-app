import React from "react";
import {useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";

import axios from "axios";

export const ConfirmSlotPage = (props) => {

    const [checked, setChecked] = useState(false)


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

    const updateSelectedSlotDetails = () => {
        if(localStorage.getItem("selected_slot_number") === null || localStorage.getItem("selected_slot_text")=== null) {
            console.log("slot code and text not found in local storage")
            routeChange('/book-slot')
        }
        else{
            props.setSelectedSlotNumber(localStorage.getItem("selected_slot_number"))
            props.setSelectedSlotText(localStorage.getItem("selected_slot_text"))
        }
    }


    useEffect(() => {
        verifyLogin()
        updateSelectedDays()
        updateSelectedSlotDetails()
    }, []);


    return (<>
            <div className="container h-100 d-flex justify-content-center">
                <h3>Confirm Selected Slot</h3>
            </div>
            <h4>Your slot details</h4>
            <ul className="list-group">
                <li className="list-group-item">Selected Days : {props.selectedDaysText}</li>
                <li className="list-group-item">Selected Time Slot : {props.selectedSlotText}</li>
                <li className="list-group-item">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => setChecked(!checked)}/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                I agree to go to gym during the above mentioned slot and not miss any booked slot
                            </label>
                    </div>
                    </li>
                <li className="list-group-item">Email: {props.userSNUID}</li>
            </ul>
            <div className="container h-100 d-flex justify-content-center">
                    <button type="button" className="btn btn-success my-3" onClick={clickYes} disabled={!checked}>CONFIRM SLOT</button>
                <br/>
                <br/>
            </div>
        </>
    )
}
