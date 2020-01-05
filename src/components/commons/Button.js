import React from "react";

export function Button({name, onClick}){
    return (
        <button 
            className="btn btn-secondary btn-sm mx-1"
            onClick={onClick}>
            {name}
        </button>
    );
};