import React, { Component } from 'react'
import PivotComponent from './PivotTable'


const data=[
    {
        _id:1,
        name:'dfds'
    },
    {
        _id:2,
        name:'vrtij'
    },
    {
        _id:3,
        name:'ovemitovi'
    }
]

 

export default function ReportComponent() {
    return (
        <div>
            <PivotComponent 
                data={data}
                initRows={['_id']}
                initCols={['name']}
            
            />
        </div>
    )
}
