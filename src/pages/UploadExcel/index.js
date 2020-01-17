import React, { useState } from "react";
import XLSX from 'xlsx';
import ExcelTable from "./ExcelTable";

const readWB = (data) => {
    return XLSX.read(data, {type: 'array'});
}

// dummy response
const dummy = [
    ['emp_code', 'name', 'age'],
    [1, 'empty', '32'],
    [2, 'rohn', 'empty'],
    [3, 'abc', 10]
];

export function UploadExcel(){
    const [data, setData] = useState(dummy);
    const [uploaded, setUploaded] = useState(false);

    const onSelectFile = (e) => {
        console.log('clicked');
        if(e.target.files && e.target.files.length > 0){
            const reader = new FileReader();
            reader.addEventListener('load', () => {
                const data = new Uint8Array(reader.result);
                const wb = readWB(data);
                const sheetName = wb.SheetNames[0];
                const sheet = wb.Sheets[sheetName];

                // 2d array, upload on server
                const aoa = XLSX.utils.sheet_to_json(sheet, {
                    header: 1,
                    defval: 'empty'
                });
                //console.log(aoa);
                setData(aoa);
                setUploaded(true);
                //console.log(XLSX.utils.sheet_to_html(sheet));
            });
            reader.readAsArrayBuffer(e.target.files[0]);
        } 
    }
    return (
        <div className="upload-excel-page">
            <div className="p-2">Upload Excel</div>
            <input type="file" onChange={onSelectFile}/>
            <div className="uploaded-excel pt-3">

                {uploaded && <ExcelTable data={data}/>}
            </div>
        </div>
    )
}