import axios from "axios";
import {useEffect, useState} from "react";
import {SlotsTableContent} from "./SlotsTableContent";


export const SlotsTablePage = (props) => {
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