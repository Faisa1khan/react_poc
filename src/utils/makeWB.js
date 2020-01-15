// make work book/excel for given data

import XLSX from "xlsx";


// data - json or 2d array
// sheetName - name of sheet in workbook/excel file
export function makeWB(data, sheetName) {       // make work book
    const wb = XLSX.utils.book_new();  // new book
    wb.Props = {
        Title: 'Table',
        Subject: 'Listings',
        Author: '',
        CreatedDate: new Date()
    };
    wb.SheetNames.push(sheetName);  // new sheet in work book
    // convert data to excel sheet
    let sheet;
    if(Object.getPrototypeOf(data[0]) === Object.prototype)  // if data is json
        sheet = XLSX.utils.json_to_sheet(data);  
    else                                                     // if data 2d array
        sheet = XLSX.utils.aoa_to_sheet(data);
    wb.Sheets[sheetName] = sheet;
    return wb;
}