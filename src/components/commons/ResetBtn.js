import React from "react";


export function ResetBtn({onClick}){
    onClick = onClick || (function(){});
    return (
        <button 
            type="button" 
            className="btn btn-success btn-sm rounded-circle"
            onClick={onClick}
            >
            ⭮ 
        </button>
    )
}