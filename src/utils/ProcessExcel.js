import * as XLSX from "xlsx";

export function ProcessExcel(data) {
  //Read the Excel File data.
  return new Promise(resolve => {
    let workbook = XLSX.read(data, {
      type: "binary"
    });

    //Fetch the name of First Sheet.
    let firstSheet = workbook.SheetNames[0];

    //Read all rows from First Sheet into an JSON array.
    resolve(
      XLSX.utils.sheet_to_csv(workbook.Sheets[firstSheet], {
        defval: null
      })
    );
  });
}
