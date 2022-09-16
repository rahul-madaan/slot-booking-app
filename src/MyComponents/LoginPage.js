import React from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export const LoginPage = (props) => {
    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    }

    const loginSubmit = (e) => {
        e.preventDefault()
        axios.post(process.env.REACT_APP_API_URI + process.env.REACT_APP_API_VERSION + "/login", {
            'email_ID': props.userSNUID,
            'password': props.loginOTP
        }).then((result) => {
            if (result.data.statusCode === 0) {
                props.setUserSNUID(props.userSNUID)
                routeChange('/select-days')
                localStorage.setItem("user_emailID",result.data.encrypted_emailID)
            } else if (result.data.statusCode === 1) {
                console.log("Passwords do not match")
            } else if (result.data.statusCode === 2) {
                console.log("USER NOT REGISTERED")
            }
        })
    }


    return (
        <div className="mx-5">
            <form onSubmit={loginSubmit}>
                <div className="mb-3">
                    <label  className="form-label">Enter SNU ID</label>
                    <input type="text" value={props.userSNUID} onChange={(e) => {
                        props.setUserSNUID(e.target.value)
                    }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">OTP</label>
                    <input type="password" value={props.loginOTP} onChange={(e) => {
                        props.setLoginOTP(e.target.value)
                    }} className="form-control"/>
                </div>
                <button type="submit" className="btn btn-primary">Log in</button>
            </form>
        </div>
    )
}
