// import * as XLSX from "xlsx";
var XLSX = require("xlsx");
var workbook = XLSX.readFile("demo.xlsx");
console.log(workbook);
// var sheet_name_list = workbook.SheetNames;
// console.log(
//   XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]], {
//     defval: "undefined"
//   })
// );
