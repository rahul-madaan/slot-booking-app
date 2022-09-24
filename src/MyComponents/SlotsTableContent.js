import {SlotButton} from "./SlotButton";


export const SlotsTableContent = (props) => {

    return (
        <>
            <tr>
                <th>{props.index +1}</th>
                <td>{props.selectedDaysCode[0]+" "+props.selectedDaysCode[1]+" "+props.selectedDaysCode[2]}</td>
                <td>{props.timeSlots}</td>
                <td>{props.availableSlotCount}</td>
                <td><SlotButton value={props.timeSlots}
                                key={props.index}
                                value2={props.index}
                                availableSlotCount={props.availableSlotCount}
                                setSelectedSlotNumber={props.setSelectedSlotNumber}
                                setSelectedSlotText={props.setSelectedSlotText}
                                selectedSlotNumber={props.selectedSlotNumber}
                                selectedSlotText={props.selectedSlotText}/></td>
            </tr>
        </>
    )
}