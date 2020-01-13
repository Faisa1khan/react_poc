import React, { Component, useEffect, useState } from 'react'
import PivotTableUI from 'react-pivottable/PivotTableUI';
import 'react-pivottable/pivottable.css';
import { getFlattenedAO } from '../../../utils/genericUtils';
import TableRenderers from 'react-pivottable/TableRenderers';
import createPlotlyComponent from 'react-plotly.js/factory'
import createPlotlyRenderers from 'react-pivottable/PlotlyRenderers';
 
const Plot = createPlotlyComponent(window.Plotly);
const PlotlyRenderers = createPlotlyRenderers(Plot);


export default function PivotComponent(props) {
    const [pivotState,setPivotState]=useState({})
    
    useEffect(()=>{
        setPivotState({...pivotState,rows:props.initRows,cols:props.initCols})
    },[])

    return (
        <PivotTableUI 
            data={getFlattenedAO(props.data)}
            onChange={(s)=>setPivotState(s)}
             renderers={Object.assign({}, TableRenderers, PlotlyRenderers)}
            {...pivotState}
        
        />
    )
}
