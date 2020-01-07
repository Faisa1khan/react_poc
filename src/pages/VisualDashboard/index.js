import React, { useState, useEffect } from "react";
import axios from 'axios';
import PiSection from "./PiSection";

const URL = 'https://api.myjson.com/bins/mxibk';
// {"name":"Jule","gender":"Male","country":"Greece","department":"Electronics","ctc":4.4}

export default function VisualDashBoard(props) {

    const [data, setData] = useState(undefined);
    useEffect(() => {
        axios({
            method: 'GET',
            url: URL
        })
        .then(res => res.data)
        .then(data => {
            setData(data);
        })
        .catch(error => console.log(error));
    }, []);

    return (
        <div className="visual-dashboard">
            <div>Visual Dashboard</div>
            <PiSection data={data}/>            
        </div>
    )
};