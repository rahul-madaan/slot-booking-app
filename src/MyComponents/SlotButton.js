import {useNavigate} from "react-router-dom";
import axios from "axios";
import {toast} from "react-toastify";

export const SlotButton = (props) => {

    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
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


    const clickBookSlot = (e) => {
        e.preventDefault()
        console.log("INDEX = " + e.target.getAttribute('data-value-slot-name') + " " + e.target.getAttribute('data-value-index-number'))
        //check all available slots, if 0 then give error and reload page
        localStorage.setItem("selected_slot_number",e.target.getAttribute('data-value-index-number'))
        localStorage.setItem("selected_slot_text",e.target.getAttribute('data-value-slot-name') )
        props.setSelectedSlotNumber(e.target.getAttribute('data-value-index-number'))
        props.setSelectedSlotText(e.target.getAttribute('data-value-slot-name'))
        axios.post(process.env.REACT_APP_API_URI + process.env.REACT_APP_API_VERSION + "/reserve-slot", {
            'email_id': props.userSNUID,
            'days_code': localStorage.getItem("selected_days_code"),
            'slot_number': e.target.getAttribute('data-value-index-number')
        }).then((result) => {
            console.log(result)
            if (result.data.Status === "TEMP_BOOKED") {
                routeChange('/confirm-slot')
                success_notification("Slot reserved for 15 minutes")
            }
            else if(result.data.Status === "ALREADY_FULL"){
                routeChange('/book-slot')
                warn_notification("All slots just got filled, refresh page and select another slot")
            }
        })
    }


    return (
        <>
            <button type="button" className="btn btn-outline-success" onClick={clickBookSlot} data-value-slot-name={props.value} data-value-index-number={props.value2} disabled={props.availableSlotCount <= 0} > Book Slot
            </button>
        </>
    )
}
