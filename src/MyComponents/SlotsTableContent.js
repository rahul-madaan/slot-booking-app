import {SlotButton} from "./SlotButton";
import {useState} from "@types/react";
import axios from "axios";


export const SlotsTableContent = (props) => {

    const [slotAvailabilityArray, setSlotAvailabilityArray] = useState([0,0,0,0,0,0,0,0])

    const fetchSlotAvailability = () => {
        axios.get("http://localhost:8000/").then((result)=>{
            console.log("Fetched Data = " + result.data.message)
        })
    }

    return (
        <>
            <tr>
                <th>{props.index +1}</th>
                <td>Selected days</td>
                <td>{props.timeSlots}</td>
                <td></td>
                <td><SlotButton value={props.timeSlots} key={props.index} value2={props.index} /></td>
            </tr>
        </>
    )
}