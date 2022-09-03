import {SlotButton} from "./SlotButton";


export const SlotsTableContent = (props) => {

    return (
        <>
            <tr>
                <th>{props.index +1}</th>
                <td>Selected days</td>
                <td>{props.timeSlots}</td>
                <td>{props.availableSlotCount}</td>
                <td><SlotButton value={props.timeSlots} key={props.index} value2={props.index} /></td>
            </tr>
        </>
    )
}