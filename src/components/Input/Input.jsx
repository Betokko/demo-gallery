import React from "react";
import './Input.css'

function Input({placeholder, handleChange}) {
    const handleOnChange = (evt) => {
        if (handleChange) {
            handleChange(evt.target.value)
        }
    }

    return(
        <input 
            className={"input"} 
            type={"text"}
            placeholder={placeholder}
            onChange={handleOnChange}
         />
    )
}

export default  Input