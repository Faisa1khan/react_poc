import React from "react";

export function Button({name, onClick, bootBtnClass='btn-secondary'}){
    return (
        <button 
            className={`btn ${bootBtnClass} btn-sm mx-1`}
            onClick={onClick}>
            {name}
        </button>
    );
};