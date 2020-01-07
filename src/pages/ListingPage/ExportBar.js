import React from "react";
import XLSX from 'xlsx';
import FileSaver from 'file-saver';
//import { Button } from "../../components/commons";

//import { usePrevious } from "../../components/";

// enums
const formatType = {
    XLSX: 'xlsx',
    CSV: 'csv'
};
const exportType = {
    BULK: 'bulk',
    NORMAL: 'normal'
};

function s2ab(s){
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i=0 ; i<s.length ; i++)
        view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
}

export default function ExportBar(props){
    const { bulkData, data } = props;

    const makeWB = (data) => {   // make work book
        const wb = XLSX.utils.book_new();  // new book
        wb.Props = {
            Title: 'Table',
            Subject: 'Listings',
            Author: '',
            CreatedDate: new Date()
        };
        wb.SheetNames.push('Sheet1');  // new sheet in work book
        const ws_data = data;
        const ws = XLSX.utils.json_to_sheet(ws_data);  // convert data to excel sheet
        wb.Sheets['Sheet1'] = ws;
        return wb;
    } 
    const downloadOnClient = (wbout, extension) => {   // download the excel/csv sheet
        const blob = new Blob([s2ab(wbout)], {type:"application/octet-stream"});
        FileSaver.saveAs(blob, `listings.${extension}`);
    }
    const exportData = (data, format) => {  // make csv/excel data to be exported
        if(!data)
            return;
        
        const wb = makeWB(data);
        const wbout = XLSX.write(wb, {bookType: format, type: 'binary'});
        downloadOnClient(wbout, format);
    }
    const handleChange = (e) => {
        console.log(e.target.getAttribute('data-format-type'));
        // normal excel export
        if( e.target.getAttribute('data-export-type') === exportType.NORMAL && 
            e.target.getAttribute('data-format-type') === formatType.XLSX){   
                exportData(data, formatType.XLSX);
        }
        // normal csv export
        if( e.target.getAttribute('data-export-type') === exportType.NORMAL && 
            e.target.getAttribute('data-format-type') === formatType.CSV){   
                exportData(data, formatType.CSV);
        }
        // bulk excel export
        if( e.target.getAttribute('data-export-type') === exportType.BULK && 
            e.target.getAttribute('data-format-type') === formatType.XLSX){  
                exportData(bulkData, formatType.XLSX);
        }
        // bulk csv export
        if( e.target.getAttribute('data-export-type') === exportType.BULK && 
            e.target.getAttribute('data-format-type') === formatType.CSV){  
                exportData(bulkData, formatType.CSV);
        }
    }

    return (
        <div className="export-bar d-flex">
            <div class="dropdown export" onChange={handleChange} onClick={handleChange}>
                <button class="btn btn-secondary btn-sm dropdown-toggle" role="button" id="export-bar-export-btn" data-toggle="dropdown">
                    Export
                </button>
                <div class="dropdown-menu" aria-labelledby="export-bar-export-btn">
                    <a class="dropdown-item" data-format-type={formatType.XLSX} data-export-type={exportType.NORMAL} href="#">Excel</a>
                    <a class="dropdown-item" data-format-type={formatType.CSV} data-export-type={exportType.NORMAL} href="#">CSV</a>
                </div>
            </div>
            <div class="dropdown bulk-export ml-2" onClick={handleChange}>
                <button class="btn btn-secondary btn-sm dropdown-toggle" role="button" id="export-bar-bulk-export-btn" data-toggle="dropdown">
                    Bulk Export
                </button>
                <div class="dropdown-menu" aria-labelledby="export-bar-bulk-export-btn">
                    <a class="dropdown-item" data-format-type={formatType.XLSX} data-export-type={exportType.BULK} href="#">Excel</a>
                    <a class="dropdown-item" data-format-type={formatType.CSV} data-export-type={exportType.BULK} href="#">CSV</a>
                </div>
            </div>
        </div>
    )
}