import axios from "axios";
import {useNavigate} from "react-router-dom";
import React, {useEffect} from "react";
import 'react-toastify/dist/ReactToastify.css'
import {toast, ToastContainer} from "react-toastify";

export const RegisterPage = (props) => {
    const [registerPassword, setRegisterPassword] = React.useState("")
    const [registerUserName, setRegisterUserName] = React.useState("")
    const [registerEmail, setRegisterEmail] = React.useState("")
    const [registerPhoneNumber, setRegisterPhoneNumber] = React.useState("")
    const [tempPhoneNumber, setTempPhoneNumber] = React.useState("")
    const [disableRegisterButton, setDisableRegisterButton] = React.useState(false)


    const warn_notification = (content) => toast.warn(content, {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        newestOnTop: true
    });

    const success_notification = (content) => toast.success(content, {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        newestOnTop: true
    });


    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    }

    const registerSubmit = (e) => {
        e.preventDefault()
        if (registerUserName === '') {
            warn_notification("Name cannot be blank!")
        } else if (registerUserName.includes(".") || registerUserName.includes("@") || registerUserName.includes("#") || registerUserName.includes("$") || registerUserName.includes("!") || registerUserName.includes("%") || registerUserName.includes("^") || registerUserName.includes("&") || registerUserName.includes("*") || registerUserName.includes("(") || registerUserName.includes(")") || registerUserName.includes("+") || registerUserName.includes("-") || registerUserName.includes("\\") || registerUserName.includes("?") || registerUserName.includes(":") || registerUserName.includes("}") || registerUserName.includes("{") || registerUserName.includes("/") || registerUserName.includes(";")) {
            warn_notification("Name cannot contain special characters!")
        } else if (registerEmail === '') {
            warn_notification("Email cannot be blank!")
        } else if (registerEmail.includes('.') === false || registerEmail.includes('@') === false) {
            warn_notification("Email must have . and @")
        } else if (registerEmail.includes('@snu.edu.in') === false) {
            warn_notification("You can only register using SNU EmailID (@snu.edu.in)")
        } else if (registerPhoneNumber.length !== 10) {
            warn_notification("Enter a Valid 10 Digit Phone Number!")
        } else if (registerPassword.length < 4) {
            warn_notification("Password cannot be less than 4 characters!")
        } else {
            axios.post(process.env.REACT_APP_API_URI + process.env.REACT_APP_API_VERSION + "/register", {
                'password': registerPassword,
                'name': registerUserName,
                'email_id': registerEmail,
                'phone_number': registerPhoneNumber
            }).then((result) => {
                console.log(result)
                if (result.data.status === "User registered successfully!") {
                    success_notification("User Registered! Redirecting to login page")
                    setTimeout(() => {
                        routeChange("/login")
                        setDisableRegisterButton(true)
                    }, 4000)
                }
                else if(result.data.status === "User already registered!"){
                    warn_notification(result.data.status)
                }
            })
        }
    }


    useEffect(() => {
        if (registerPhoneNumber === '0') {
            setRegisterPhoneNumber('')
        }
        if (registerPhoneNumber.length === 10) {
            setTempPhoneNumber(registerPhoneNumber)
        }
        if (registerPhoneNumber.length > 10) {
            setRegisterPhoneNumber(tempPhoneNumber)
        }

    }, [registerPhoneNumber])


    useEffect(() => {
        if (registerEmail==="" || registerUserName==="" || registerPhoneNumber==="" || registerPassword===""){
            setDisableRegisterButton(true)
        }
        else{
            setDisableRegisterButton(false)
        }
    }, [registerEmail,registerUserName,registerPhoneNumber,registerPassword])


    return (
        <div className="mx-5">
            <h2>Register User</h2>
            <hr/>
            <form onSubmit={registerSubmit}>
                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input type="text" placeholder="Enter your full name" value={registerUserName}
                           onChange={(e) => {
                               setRegisterUserName(e.target.value)
                           }} className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email ID</label>
                    <input type="text" placeholder="Enter email ID" value={registerEmail} onChange={(e) => {
                        setRegisterEmail(e.target.value)
                    }} className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input type="number" placeholder="Enter 10 Digit Phone Number" value={registerPhoneNumber}
                           onChange={(e) => {
                               setRegisterPhoneNumber(e.target.value)
                           }} className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">New Password</label>
                    <input type="password" placeholder="Set a new password" value={registerPassword}
                           onChange={(e) => {
                               setRegisterPassword(e.target.value)
                           }} className="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={registerSubmit}
                        disabled={disableRegisterButton}>Register
                </button>
            </form>
            <ToastContainer/>
        </div>


    )
}
