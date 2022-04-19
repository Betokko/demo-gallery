import React from "react";
import './Button.css'
function Button({title}) {
    return (
        <button 
            className="button"
        >
            {title}
        </button>
    )
}
export default Button;