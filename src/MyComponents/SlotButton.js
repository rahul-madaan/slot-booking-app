export const SlotButton = (props) => {


    const onButtonClick = (e) => {
        e.preventDefault()
        console.log("INDEX = " + e.target.getAttribute('data-value-slot-name') + " " + e.target.getAttribute('data-value-index-number'))
    }

    return (
        <>
            <button type="button" className="btn btn-outline-success" onClick={onButtonClick} data-value-slot-name={props.value} data-value-index-number={props.value2}> Book Slot
            </button>
        </>
    )
}
