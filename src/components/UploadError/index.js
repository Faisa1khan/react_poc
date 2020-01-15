import React, { useState } from 'react'
import xlsx from 'xlsx'
import ErrorViewer from './ErrorViewer';

export default function UploadError() {
    const [xlData,setXlData]=useState([])
    const [wbTypes,setWbTypes]=useState(null)
    const onSelectFile=(file)=>{
        const reader = new FileReader();
        const rABS = !!reader.readAsBinaryString;
        
        reader.onload = ({ target: { result } }) => {
        const wb = xlsx.read(result, { type: rABS ? "binary" : "array" });
      
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = xlsx.utils.sheet_to_json(ws,{header:1,defval:null});
        
            setXlData(data)
            setWbTypes({...Object.values(wb.Sheets)[0],'!ref':undefined,'!margins':undefined})
        };
        if (rABS) reader.readAsBinaryString(file);
        else reader.readAsArrayBuffer(file);
    }

    


    return (
        <div>
            <input type='file' onChange={(e)=>onSelectFile(e.target.files[0])} />
            <ErrorViewer baseData={xlData} wbTypes={wbTypes}/>
        </div>
    )
}
