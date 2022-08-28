import React from 'react'

export const SlotButton = (props) => {

    const myBuyingRequestButtonClick = (e) => {
        e.preventDefault()
        console.log("INDEX = " + e.target.getAttribute('data-value-index') + props.data)
    }
    return (
        <>
            <button type="button" className="btn btn-outline-danger" onClick={myBuyingRequestButtonClick}>Check Owner
            </button>
        </>
    )
}
