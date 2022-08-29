import {useLayoutEffect, useState} from "react";
import axios from "axios";
export const SlotButton = (props) => {
    const [slotAvailabilityArray, setSlotAvailabilityArray] = useState([12,13,14,15,16,17,18,19])

    const onButtonClick = (e) => {
        e.preventDefault()
        console.log("INDEX = " + e.target.getAttribute('data-value-slot-name') + " " + e.target.getAttribute('data-value-index-number'))
    }

    const fetchSlotAvailability = () => {
        axios.get("http://localhost:8000/").then((result)=>{
            console.log("Fetched Data = " + result.data.message)
        })
    }

    useLayoutEffect(() => {
        fetchSlotAvailability()
    }, []);

    return (
        <>
            <button type="button" className="btn btn-outline-success" onClick={onButtonClick} data-value-slot-name={props.value} data-value-index-number={props.value2}>{props.value} {slotAvailabilityArray[props.value2]}
            </button>
            <br/>
            <br/>
        </>
    )
}
