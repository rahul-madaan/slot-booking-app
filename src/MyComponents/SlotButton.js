import {useLayoutEffect} from "react";
import axios from "axios";
export const SlotButton = (props) => {

    const myBuyingRequestButtonClick = (e) => {
        e.preventDefault()
        console.log("INDEX = " + e.target.getAttribute('data-value-slot-name') + " " + e.target.getAttribute('data-value-index-number'))
    }

    const fetchSlotAvailability = () => {
        axios.get("http://localhost:8000/").then((result)=>{
            console.log("Fetched Data = " + result.data)
        })
    }

    useLayoutEffect(() => {
        fetchSlotAvailability()
    }, [""]);

    return (
        <>
            <button type="button" className="btn btn-outline-danger" onClick={myBuyingRequestButtonClick} data-value-slot-name={props.value} data-value-index-number={props.value2}>{props.value}
            </button>
        </>
    )
}
