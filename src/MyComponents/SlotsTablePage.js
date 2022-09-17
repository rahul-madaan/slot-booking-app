import axios from "axios";
import {useEffect, useState} from "react";
import {SlotsTableContent} from "./SlotsTableContent";
import {useNavigate} from "react-router-dom";


export const SlotsTablePage = (props) => {
    const [slotAvailabilityArray, setSlotAvailabilityArray] = useState([0,0,0,0,0,0,0,0])

    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    }

    const fetchSlotAvailability = () => {
        axios.get(process.env.REACT_APP_API_URI + process.env.REACT_APP_API_VERSION + "/").then((result)=>{
            console.log("Fetched Data = " + result.data.availableSlots)
            setSlotAvailabilityArray(result.data.availableSlots)
        })
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
        props.setSelectedDaysCode(localStorage.getItem("selected_days_code"))
        props.setSelectedDaysText(localStorage.getItem("selected_days_text"))
        props.setConfirmSelectionButtonDisabled(false)
    }



    useEffect(() => {
        verifyLogin()
        fetchSlotAvailability()
        updateSelectedDays()
    }, []);



    return (
        <>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Selected Days</th>
                    <th scope="col">Time slot</th>
                    <th scope="col">Available slots</th>
                    <th scope="col">Book Slot</th>
                </tr>
                </thead>
                <tbody>
                {props.timeSlots.map((timeslots,index) => {
                    return <SlotsTableContent timeSlots={timeslots} index={index} availableSlotCount={slotAvailabilityArray[index]} selectedDaysCode={props.selectedDaysCode}/>
                })}
                </tbody>
            </table>
        </>
    )
}