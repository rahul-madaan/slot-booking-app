import axios from "axios";
import {useEffect, useState} from "react";
import {SlotsTableContent} from "./SlotsTableContent";


export const SlotsTable = (props) => {
    const [slotAvailabilityArray, setSlotAvailabilityArray] = useState([1,2,3,1,2,3,1,2])

    const fetchSlotAvailability = () => {
        axios.get(process.env.REACT_APP_API_URI + process.env.REACT_APP_API_VERSION + "/").then((result)=>{
            console.log("Fetched Data = " + result.data.availableSlots)
            setSlotAvailabilityArray(result.data.availableSlots)
        })
    }

    useEffect(() => {
        fetchSlotAvailability()
    }, []);


    return (
        <>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Default radio
                    </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Default checked radio
                    </label>
            </div>
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
                    return <SlotsTableContent timeSlots={timeslots} index={index} availableSlotCount={slotAvailabilityArray[index]}/>
                })}
                </tbody>
            </table>
        </>
    )
}