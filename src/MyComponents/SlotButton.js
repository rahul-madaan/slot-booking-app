import React from 'react'

export const SlotButton = (props) => {

    const myBuyingRequestButtonClick = (e) => {
        e.preventDefault()
        console.log("INDEX = " + e.target.getAttribute('data-value-index'))
    }
    return (
        <>
            <button type="button" className="btn btn-outline-danger" onClick={myBuyingRequestButtonClick} data-value-index={props.value}>Check Owner
            </button>
        </>
    )
}
