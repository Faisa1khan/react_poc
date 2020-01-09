import React, { useState, useEffect } from "react";
import axios from 'axios';
import PiSection from "./PiSection";
import BarSection from "./BarSection";
import WordCloudSection from "./WordCloudSection";

import { Loader } from "../../components/commons";


const URL = 'https://api.myjson.com/bins/mxibk';
// {"name":"Jule","gender":"Male","country":"Greece","department":"Electronics","ctc":4.4}

export default function VisualDashBoard(props) {
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
    }

    return (
        <div className="visual-dashboard">
            <div className="p-3"><h4>Visual Dashboard</h4></div>
            <ul id="tabs" class="nav nav-pills mb-2">
                <li class="nav-item">
                    <a class="nav-link active" data-tab='pi' href="#" onClick={onTabClick}>PiChart</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-tab='bar' href="#" onClick={onTabClick}>BarChart</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-tab='word-cloud' href="#" onClick={onTabClick}>Word Cloud</a>
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
                        
        </div>
    )
};