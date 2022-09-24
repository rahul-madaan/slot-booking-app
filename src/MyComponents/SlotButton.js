import {useNavigate} from "react-router-dom";

export const SlotButton = (props) => {

    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    }


    const clickBookSlot = (e) => {
        e.preventDefault()
        console.log("INDEX = " + e.target.getAttribute('data-value-slot-name') + " " + e.target.getAttribute('data-value-index-number'))
        //check all available slots, if 0 then give error and reload page
        localStorage.setItem("selected_slot_number",e.target.getAttribute('data-value-index-number'))
        localStorage.setItem("selected_slot_text",e.target.getAttribute('data-value-slot-name') )
        routeChange('/confirm-slot')
        props.setSelectedSlotNumber(e.target.getAttribute('data-value-index-number'))
        props.setSelectedSlotText(e.target.getAttribute('data-value-slot-name'))
    }

    return (
        <>
            <button type="button" className="btn btn-outline-success" onClick={clickBookSlot} data-value-slot-name={props.value} data-value-index-number={props.value2} disabled={props.availableSlotCount === 0} > Book Slot
            </button>
        </>
    )
}
