import React from "react";
import {useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";

import axios from "axios";

export const MarkAttendancePage = (props) => {

    const [userLatitude, setUserLatitude] = useState(0)
    const [userLongitude, setUserLongitude] = useState(0)



    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    }


    const markAttendanceButtonClick = (e) => {
        e.preventDefault()
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            setUserLatitude(position.coords.latitude)
            setUserLongitude(position.coords.longitude)
        });
    }


    return (<>
            <div className="container h-100 d-flex justify-content-center">
                <h3>Mark your attendance</h3>
            </div>

            <div className="container h-100 d-flex justify-content-center">
                <button type="button" className="btn btn-success btn-lg my-3 mx-3" onClick={markAttendanceButtonClick}>Mark Attendance</button>
            </div>
            <p>Latitude: {userLatitude}</p>

            <p>Longitude: {userLongitude}</p>
        </>
    )
}
