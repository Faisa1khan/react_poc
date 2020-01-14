import React, { useContext,useEffect } from 'react'
import xlsx from 'xlsx'
import {saveAs} from 'file-saver'
import {ExportContext} from '../index'
import JSzip from 'jszip'



 

export default function ExportBody(props) {
    const exportContext=useContext(ExportContext)
    useEffect(()=>{
        console.log(exportContext.filtered_data)
    },[])
    function createData(obj, attrs) {
        let newData = [];
        newData.push(attrs);
        obj.map(item => {
          newData.push(Object.values(item));
        });
        return newData;
      }
      
    function saveFile(workbook) {
        
        const wb_blob=createBlob(workbook,'xlsx')
        //In excel
        if(props.mode==='excel')
        {
            saveAs(wb_blob, "test.xlsx");
        
        }
        //In zip
        else if(props.mode==='zip')
        {
            
            const jszip=new JSzip()
            const xlsFolder = jszip.folder("xlszip");
            //xlsFolder.file("sheet1.xlsx", wb_blob);
            addToZip(xlsFolder,wb_blob,'filtered.xlsx')
            const bulkWorkbook=createWorkbook(exportContext.bulk_data,exportContext.table_headers)
            const bulkBlob=createBlob(bulkWorkbook,'xlsx')
            addToZip(xlsFolder,bulkBlob,'bulk.xlsx')
            jszip.generateAsync({ type: "blob" }).then(function(content) {
                // see FileSaver.js
                saveAs(content, "data.zip");
            });
        }
    }

    function createBlob(workbook,type) {
        var wopts = { bookType: type, bookSST: false, type: "array" };
        var wbout = xlsx.write(workbook, wopts);
        const wb_blob=new Blob([wbout],{ type: "application/octet-stream" })
        return wb_blob

    }

    function createWorkbook(data,attrs) {
        var wb = xlsx.utils.book_new();
        var ws_data = createData(data, attrs);
        var ws = xlsx.utils.aoa_to_sheet(ws_data);
        xlsx.utils.book_append_sheet(wb, ws, "Sheet 1");
        return wb
    }

    function createWorkbookAndSave(data,attrs) {
        var wb = xlsx.utils.book_new();
        data.map((sheet_data,sheet_index)=>{
            var ws_data = createData(sheet_data, attrs);
            var ws = xlsx.utils.aoa_to_sheet(ws_data);
            xlsx.utils.book_append_sheet(wb, ws, `Sheet ${sheet_index}`);
        })
        
        saveFile(wb)
    }

    function addToZip(zip_folder,wb_blob,file_name) {
        zip_folder.file(file_name,wb_blob)
    }

    function createWorksheet(data,attrs) {
        const ws_data = createData(data, attrs);
        const ws = xlsx.utils.aoa_to_sheet(ws_data);
        return ws
        
    }

    function addSheetToWorkBook(workbook,worksheet,sheet_name) {
        xlsx.utils.book_append_sheet(workbook,worksheet,sheet_name)
    }


        return (
            <div>
                     {props.mode}
                    <button onClick={()=>createWorkbookAndSave([exportContext.filtered_data,exportContext.bulk_data],exportContext.table_headers)}>Download</button>
            </div>
        )
   
}
