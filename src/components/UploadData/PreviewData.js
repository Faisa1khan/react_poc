import React, { useState } from "react";
import * as XLSX from "xlsx";
import { Container } from "react-bootstrap";
import { readFileAsBinary } from "../../utils/readFileAsBinary";
import { ProcessExcel } from "../../utils/ProcessExcel";
import Lists from "../listing/Lists";
import UploadError from "./UploadError";

const PreviewData = ({ props }) => {
  const [data, setData] = useState(null);
  console.log(props);

  const onFileChange = async e => {
    if (e.target.files && e.target.files.length > 0) {
      const DataUrl = await readFileAsBinary(e.target.files[0]);
      const data = await ProcessExcel(DataUrl);
      console.log(data);
      setData(data);
    }
  };

  return (
    <Container>
      <input type="file" onChange={onFileChange} />
      {/* <div>{data}</div> */}
      {!!data && (
        <>
          {/* <UploadError data={data} /> */}
          {data}
        </>
      )}
    </Container>
  );
};

export default PreviewData;
