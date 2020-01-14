import React, { useState, useEffect } from "react";
import PivotTableUI from "react-pivottable/PivotTableUI";
import 'react-pivottable/pivottable.css';
import TableRenderers from 'react-pivottable/TableRenderers';
import Plot from 'react-plotly.js';
import createPlotlyRenderers from 'react-pivottable/PlotlyRenderers';

// using plotly charts
const PlotlyRenderers = createPlotlyRenderers(Plot);


export default function PivotTable(props){
    const [pivotState, setPivotState] = useState({});
    // set initial pivot
    useEffect(() => {
        if(!props.data)
            return;
        setPivotState({
            aggregatorName: 'Sum',
            cols: ['department'],
            rendererName: "Stacked Column Chart",
            vals: ['ctc']
        });
    }, [props.data]);

    if(!props.data)
        return <div></div>;

    return (
        <div className="pivot-table">
            <PivotTableUI
                data={props.data}
                onChange={(s) => setPivotState(s)}
                renderers={Object.assign({}, TableRenderers, PlotlyRenderers)}
                {...pivotState}
            />
        </div>
    );
};