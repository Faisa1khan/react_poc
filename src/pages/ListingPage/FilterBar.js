import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import Filter from "../../components/Filter/Filter";
import { ResetBtn } from "../../components/commons";
import { listingActions } from "../../actions";
import { orderConstants } from '../../constants';

function FilterBar(props){

        // filters
        const [gender, setGender] = useState(undefined);
        const [genderActive, setGenderActive] = useState(false);
        const [status, setStatus] = useState(undefined);
        const [statusActive, setStatusActive] = useState(false);
        const [ctcOrder, setCtcOrder] = useState(undefined);  // for sort by ctc
        const [ctcOrderActive, setCtcOrderActive] = useState(false);
     
        const handleFiltersReset = () => {
            props.resetFilters();
            setGenderActive(false);
            setStatusActive(false);
            setCtcOrderActive(false);
        }
    
        //const prevFilters = usePrevious({gender, status, ctcOrder}); // custom hook
        useEffect(() => {  // have to use custom hook
            //if(prevFilters.gender !== gender)
                props.setPropertyFilter('gender', gender);
            //if(prevFilters.status !== status)
                props.setPropertyFilter('status', status);
            //if(prevFilters.ctcOrder !== ctcOrder)
                ctcOrder ? 
                    props.setSortFilter('ctc', ctcOrder) :
                    props.setSortFilter(undefined, undefined)
                ;
        }, [gender, status, ctcOrder]);

    return (
        <Fragment>
            <Filter 
                filterName={'gender'}
                options={['male', 'female']}
                defaultOption={'female'}
                setOption={setGender}
                active={genderActive}
                changeActive={setGenderActive}
            />
            <Filter 
                filterName={'status'}
                options={['true', 'false']}
                defaultOption={'false'}
                setOption={setStatus}
                active={statusActive}
                changeActive={setStatusActive}
            />
            <Filter
                filterName={'sort by CTC'}
                options={[orderConstants.ASC, orderConstants.DESC]}
                defaultOption={orderConstants.ASC}
                setOption={setCtcOrder}
                active={ctcOrderActive}
                changeActive={setCtcOrderActive}
            />
            <ResetBtn onClick={handleFiltersReset}/>
        </Fragment>
    )
};

const mapActions = {
    resetFilters: listingActions.resetFilters,
    setPropertyFilter: listingActions.setPropertyFilter,
    setSortFilter: listingActions.setSortFilter
};

export default connect(null, mapActions)(FilterBar);