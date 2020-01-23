/// to check regex and IE Support

//Reference the FileUpload element.
//Validate whether File is valid Excel file.
let regex = /^([a-zA-Z0-9\s_\\.\-:])+(.xls|.xlsx)$/;
if (regex.test(e.target.value.toLowerCase())) {
  if (typeof FileReader != "undefined") {
    let reader = new FileReader();
    //For Browsers other than IE.
    if (reader.readAsBinaryString) {
      reader.onload = function(e) {
        ProcessExcel(e.target.result);
      };
      reader.readAsBinaryString(e.target.files[0]);
    } else {
      //For IE Browser.
      reader.onload = function(e) {
        let data = "";
        let bytes = new Uint8Array(e.target.result);
        for (var i = 0; i < bytes.byteLength; i++) {
          data += String.fromCharCode(bytes[i]);
        }
        ProcessExcel(data);
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  } else {
    alert("This browser does not support HTML5.");
  }
} else {
  alert("Please upload a valid Excel file.");
}
