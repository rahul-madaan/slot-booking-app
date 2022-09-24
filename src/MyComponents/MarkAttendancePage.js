import React from "react";
import {useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";


import axios from "axios";
import 'react-toastify/dist/ReactToastify.css'
import {toast, ToastContainer} from "react-toastify";

export const MarkAttendancePage = (props) => {

    const [userLatitude, setUserLatitude] = useState(0)
    const [userLongitude, setUserLongitude] = useState(0)
    const [userIPv4, setUserIPv4] = useState(0)

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


    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    }

    const getIPv4 = async () => {
        const res = await axios.get('https://geolocation-db.com/json/')
        console.log(res.data);
        setUserIPv4(res.data.IPv4)
        success_notification('IPv4 Collected successfully')
    }


    const getLocation = async () => {
        await navigator.geolocation.getCurrentPosition(function(position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            setUserLatitude(position.coords.latitude)
            setUserLongitude(position.coords.longitude)
            success_notification("Location Collected successfully")
        },function (error){
            console.log(error)
            console.log(error)
            warn_notification(error.message.toString())
        },{enableHighAccuracy: true, timeout: 10000, showLocationDialog: true,
            forceRequestLocation: true});
    }



    const markAttendanceButtonClick = (e) => {
        e.preventDefault()
        getLocation()
        getIPv4()


    }




    return (<>
            <p></p>
            <br/>
            <br/>
            <div className="container h-100 d-flex justify-content-center">
                <h3>Mark your attendance</h3>
            </div>

            <div className="container h-100 d-flex justify-content-center">
                <button type="button" className="btn btn-success btn-lg my-3 mx-3" onClick={markAttendanceButtonClick}>Mark Attendance</button>
            </div>
            <p>Latitude: {userLatitude}</p>
            <p>Longitude: {userLongitude}</p>
            <p>IPv4 Address: {userIPv4}</p>

            <ToastContainer/>

        </>
    )
}
