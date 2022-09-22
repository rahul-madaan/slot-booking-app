import React from "react";
import {useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";


import axios from "axios";
import 'react-toastify/dist/ReactToastify.css'
import {toast, ToastContainer} from "react-toastify";

export const MarkAttendancePage = (props) => {

    const notify = () => toast('Wow so easy!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    const [userLatitude, setUserLatitude] = useState(0)
    const [userLongitude, setUserLongitude] = useState(0)
    const [userIPv4, setUserIPv4] = useState(0)



    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    }

    const getIPv4 = async () => {
        const res = await axios.get('https://geolocation-db.com/json/')
        console.log(res.data);
        setUserIPv4(res.data.IPv4)
        notify()
    }


    const getLocation = async () => {
        await navigator.geolocation.getCurrentPosition(function(position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            setUserLatitude(position.coords.latitude)
            setUserLongitude(position.coords.longitude)
        },function (error){
            console.log(error)
            console.log("Location access do")
        },{enableHighAccuracy: true, timeout: 10000, showLocationDialog: true,
            forceRequestLocation: true});
    }



    const markAttendanceButtonClick = async (e) => {
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

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

        </>
    )
}
