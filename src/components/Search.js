import React from 'react';


const Search = (props) => {
    return (
        <div className="search-bar p-2">
            <label>Search</label>
            <input 
                type="text" 
                value={props.text} 
                onChange={props.onChange}
                />
        </div>
    )
} 

export default Search;