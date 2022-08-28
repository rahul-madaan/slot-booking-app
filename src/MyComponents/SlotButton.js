
export const SlotButton = (props) => {

    const myBuyingRequestButtonClick = (e) => {
        e.preventDefault()
        console.log("INDEX = " + e.target.getAttribute('data-value-slot-name') + " " + e.target.getAttribute('data-value-index-number'))
    }
    return (
        <>
            <button type="button" className="btn btn-outline-danger" onClick={myBuyingRequestButtonClick} data-value-slot-name={props.value} data-value-index-number={props.value2}>{props.value}
            </button>
        </>
    )
}
