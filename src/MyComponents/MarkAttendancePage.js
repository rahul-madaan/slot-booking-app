import React from "react";
import {useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";


import axios from "axios";
import 'react-toastify/dist/ReactToastify.css'
import {toast} from "react-toastify";
import {getCurrentBrowserFingerPrint} from "@rajesh896/broprint.js";
import GoogleAd from "./GoogleAd";

export const MarkAttendancePage = (props) => {

    const [userLatitude, setUserLatitude] = useState(0)
    const [userLongitude, setUserLongitude] = useState(0)
    const [userIPv4, setUserIPv4] = useState(0)
    const [collectUserDetailsLoading, setCollectUserDetailsLoading] = useState(false)
    const [collectUserDetailsDisabled, setCollectUserDetailsDisabled] = useState(true)
    const [markAttendanceDisabled, setMarkAttendanceDisabled] = useState(true)
    const [userSNUID, setUserSNUID] = useState("")
    const [browserFingerprint, setBrowserFingerprint] = useState("")
    const [startDate, setStartDate] = useState("")

    const getBrowserFingerprint = () => {
        getCurrentBrowserFingerPrint().then((fingerprint) => {
            // fingerprint is your unique browser id.
            // This is well tested
            console.log("Browser Fingerprint: " + fingerprint)
            setBrowserFingerprint(fingerprint)
            success_notification("Collected Unique Device ID Successfully!")
            // the result you receive here is the combination of Canvas fingerprint and audio fingerprint.
        })
    }


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
                warn_notification("Can't verify your login, please login again!")
                routeChange('/login')
                localStorage.removeItem("user_emailID")
                localStorage.removeItem("user_emailID_len")
            } else if (result.data.loginSuccess === 1) {
                console.log("fetched email= " + result.data.user_emailID)
                props.setUserSNUID(result.data.user_emailID)
                setUserSNUID(result.data.user_emailID)
                console.log("Login verified successfully")
            }
        }).catch(error => {
            console.log(error.response)
            routeChange('/login')
        })
    }


    const getSlotDetails = () => {
        console.log("Fetching slot details...")
        axios.post(process.env.REACT_APP_API_URI + process.env.REACT_APP_API_VERSION + "/fetch-user-slot-details", {
            'email_id': props.userSNUID
        }).then((result) => {
            console.log("slot details fetched")
            if (result.data.status === "Email field is empty") {
                warn_notification("Email field is empty")
            }
            if (result.data.status === "No slot booked yet") {
                warn_notification("You have not booked any slot yet! Redirecting...")
                setCollectUserDetailsDisabled(true)
                setTimeout(() => {
                    routeChange("/select-days")
                }, 2500)
            } else if (result.data.status === "Fetched booked slot details successfully!") {
                props.setSelectedSlotNumber(result.data.slot_number)
                props.setSelectedDaysCode(result.data.days_code)
                props.setSelectedSlotText(props.timeslots[parseInt(result.data.slot_number) - 1])
                setStartDate(result.data.start_date)
                if (result.data.days_code === "MWF")
                    props.setSelectedDaysText("Monday, Wednesday, Friday")
                if (result.data.days_code === "TTS")
                    props.setSelectedDaysText("Tuesday, Thursday, Saturday")
                setCollectUserDetailsDisabled(false)
            }
        })
    }

    useEffect(() => {
        verifyLogin()
    }, []);

    useEffect(() => {
        if (userSNUID === "") {
        } else {
            getSlotDetails()
        }
    }, [userSNUID]);


    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    }

    const getIPv4 = async () => {
        const res = await axios.get('https://geolocation-db.com/json/')
        console.log(res.data);
        setUserIPv4(res.data.IPv4)
        success_notification('IP Address collected successfully')
    }


    const getLocation = () => {
        return new Promise(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(function (position) {
                console.log("Latitude is :", position.coords.latitude);
                console.log("Longitude is :", position.coords.longitude);
                setUserLatitude(position.coords.latitude)
                setUserLongitude(position.coords.longitude)
                success_notification("Location Collected successfully")
                resolve()
            }, function (error) {
                warn_notification(error)
                console.log(error)
                reject()
                warn_notification(error.message.toString())
            }, {
                enableHighAccuracy: true, timeout: 20000, showLocationDialog: true,
                forceRequestLocation: true
            });
        })
    }

    const callMarkAttendance = async () => {
        // return new Promise(async function (resolve, reject) {
        const res = await axios.post(process.env.REACT_APP_API_URI + process.env.REACT_APP_API_VERSION + '/mark-attendance',
            {
                "email_id": props.userSNUID,
                "IP_address": userIPv4,
                'browser_fingerprint': browserFingerprint,
                'latitude': userLatitude,
                'longitude': userLongitude
            }).catch(error => {
                console.log(error)
            warn_notification("Error occurred, try again!")
        })
        console.log(res.data);
        if(res.data['status'] === "ATTENDANCE_MARKED_SUCCESSFULLY")
            success_notification("Attendance Marked!")
        else
            warn_notification(res.data['status'])
        // resolve()
        // })
    }


    const markAttendanceButtonClick = async (e) => {
        e.preventDefault()
        await callMarkAttendance()
        setMarkAttendanceDisabled(true)
        setCollectUserDetailsDisabled(false)

    }


    const collectUserDetailsButtonClick = async (e) => {
        e.preventDefault()
        getBrowserFingerprint()
        setCollectUserDetailsLoading(true)
        await getIPv4()
        await getLocation()
        setCollectUserDetailsLoading(false)
        setCollectUserDetailsDisabled(true)
        setMarkAttendanceDisabled(false)
    }


    return (<>
            <GoogleAd slot="909238934" classNames="page-top"/>
            <br/>
            <div className="container h-100 d-flex justify-content-center">
                <h3>Mark your attendance</h3>
            </div>
            <hr/>

            <div className="container h-100 d-flex justify-content-center">
                <p className="fs-4">Your slot details</p>
                {/*<p style={{ fontWeight: 'bold' }}>{"\nlol"}</p>*/}
            </div>

            <div className="container h-100 d-flex justify-content-center">
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col" className="fs-4">Detail</th>
                        <th scope="col" className="fs-4">Your Slot</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">Selected Days</th>
                        <td>{props.selectedDaysText}</td>
                    </tr>
                    <tr>
                        <th scope="row">Selected Timings</th>
                        <td>{props.selectedSlotText}</td>
                    </tr>
                    <tr>
                        <th scope="row">Start Date</th>
                        <td colSpan="2">{startDate}</td>
                    </tr>
                    <tr>
                        <th scope="row">Booking Status</th>
                        <td colSpan="2">BOOKED</td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div className="container h-100 d-flex justify-content-center">
                {!collectUserDetailsLoading ? <button type="button" className="btn btn-warning btn-lg my-3 mx-3"
                                                  onClick={collectUserDetailsButtonClick}
                                                  disabled={collectUserDetailsDisabled}
                    >Collect User Details
                    </button> :
                    <button className="btn btn-warning btn-lg my-3 mx-3" type="button" disabled>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"/>
                        Collecting User details
                    </button>}
            </div>

            <div className="container h-100 d-flex justify-content-center">
                <button type="button" className="btn btn-success btn-lg my-3 mx-3"
                        onClick={markAttendanceButtonClick}
                        disabled={markAttendanceDisabled}
                >Mark Attendance
                </button>
            </div>
            <p>Latitude: {userLatitude}</p>
            <p>Longitude: {userLongitude}</p>
            <p>IPv4 Address: {userIPv4}</p>
            <p>Unique Device ID: {browserFingerprint}</p>
            <GoogleAd slot="567489934" classNames="page-bottom"/>


        </>
    )
}
