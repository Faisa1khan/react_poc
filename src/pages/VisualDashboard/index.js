import React, { useState, useEffect } from "react";
import axios from 'axios';
import PiSection from "./PiSection";
import BarSection from "./BarSection";
import WordCloudSection from "./WordCloudSection";
import PivotTable from "./PivotTable";

import { Loader } from "../../components/commons";


const URL = 'https://api.myjson.com/bins/mxibk';
// {"name":"Jule","gender":"Male","country":"Greece","department":"Electronics","ctc":4.4}

export default function VisualDashBoard(props) {
    // loading flag
    const [loading, setLoading] = useState(true);

    // fetch data
    const [data, setData] = useState(undefined);
    useEffect(() => {
        axios({
            method: 'GET',
            url: URL
        })
        .then(res => res.data)
        .then(data => {
            setData(data.splice(0, 30));
            setLoading(false);
        })
        .catch(error => console.log(error));
    }, []);

    // tabs
    useEffect(() => { // change tab active
        const tabs = document.querySelectorAll('#tabs a');
        tabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                e.preventDefault();
                tabs.forEach(tab => {
                    tab.classList.remove('active');
                })
                e.target.classList.add('active');
            
            })
        });
    }, []);

    const [tabActive, setTabActive] = useState('pi');
    const onTabClick = (e) => {
        if(e.target.getAttribute('data-tab') === 'pi'){
            setTabActive('pi');
        }
        if(e.target.getAttribute('data-tab') === 'bar'){
            setTabActive('bar');
        }
        if(e.target.getAttribute('data-tab') === 'word-cloud'){
            setTabActive('word-cloud');
        }
        if(e.target.getAttribute('data-tab') === 'pivot-table'){
            setTabActive('pivot-table');
        }
    }

    return (
        <div className="visual-dashboard">
            <div className="p-3"><h4>Visual Dashboard</h4></div>
            <ul id="tabs" className="nav nav-pills mb-2">
                <li className="nav-item">
                    <a className="nav-link active" data-tab='pi' href="#" onClick={onTabClick}>PiChart</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-tab='bar' href="#" onClick={onTabClick}>BarChart</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-tab='word-cloud' href="#" onClick={onTabClick}>Word Cloud</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-tab='pivot-table' href="#" onClick={onTabClick}>Pivot Table</a>
                </li>
            </ul>
            {loading && (
                <Loader />
            )}
            {tabActive==='pi' && (
                <PiSection data={data}/>
            )}
            {tabActive==='bar' && (
                <BarSection data={data}/>
            )}
            {tabActive==='word-cloud' && (
                <WordCloudSection data={data}/>
            )}
            {tabActive==='pivot-table' && (
                <PivotTable data={data}/>
            )}
                        
        </div>
    )
};