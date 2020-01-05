import React, { useState, useEffect } from 'react';


const Filter = ({
    filterName, 
    options, 
    defaultOption, 
    setOption: setOptionOfParent, 
    active: activeOfParent,
    changeActive: changeActiveOfParent
}) => {
    // if optional props not passed
    setOptionOfParent = setOptionOfParent || (function(){});  
    defaultOption = defaultOption || options[0];      
    activeOfParent = activeOfParent || false;
    changeActiveOfParent = changeActiveOfParent || (function(){})
    
    // state
    const [option, changeOption] = useState(defaultOption);
    const [active, changeActive] = useState(activeOfParent); 

    if(activeOfParent !== active)
        changeActive(activeOfParent);

    useEffect(() => {
        // only set option for parent when filter active
        if(active)
            setOptionOfParent(option);
        else
            setOptionOfParent(undefined);
    }); 

    const handleActive = () => {
        changeActiveOfParent(!active);
        changeActive(!active);
    }
    return (
        <div className="search-bar p-2">
            <input type='checkbox' checked={active} onChange={handleActive} />
            <label style={{textTransform: 'capitalize'}}>{filterName}</label>
            <select value={option} onChange={(e) => changeOption(e.target.value)}>
                { options.map((val, i) => <option key={i} value={val}>{val}</option>) }
            </select>
        </div>
    )
} 

export default Filter;