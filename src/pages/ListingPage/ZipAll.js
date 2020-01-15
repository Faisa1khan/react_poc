import React from "react";
import { Button } from "../../components/commons";
import JSZip from "jszip";
import FileSaver from "file-saver";
import XLSX from "xlsx";
import { connect } from "react-redux";
import { 
    stringToArrayBuffer as s2ab,
    makeWB
} from "../../utils";


function ZipAll(props){
    const handleClick = () => {
        const workBooks = [];    // work book/excel
        if(props.data.all && props.data.all.length>0)
            workBooks.push(makeWB(props.data.all, 'listing')); 
        if(props.data.filtered && props.data.filtered.length>0)
            workBooks.push(makeWB(props.data.filtered, 'listing'));
        
        // zip
        const zip = new JSZip();
        workBooks.forEach((wb, count) => {
            const wbout = XLSX.write(wb, {bookType: 'xlsx', type: 'binary'});
            const blob = new Blob([s2ab(wbout)], {type: 'application/octet-stream'});
            zip.file(`listings${count+1}.xlsx`, blob);
        });
        zip.generateAsync({type: "blob"}).then((content) => {
            FileSaver.saveAs(content, "listings.zip");
        })
    }

    return (
        <Button
            onClick={handleClick}
            name={'Zip All'}
            bootBtnClass={'btn-info'}
        />
    );
}

const mapState = state => ({
    data: state.listing.data
});
export default connect(mapState)(ZipAll);