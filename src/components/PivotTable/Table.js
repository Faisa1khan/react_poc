import React, { useState } from "react";
import PivotTableUI from "react-pivottable/PivotTableUI";
import "react-pivottable/pivottable.css";
import { Container } from "react-bootstrap";

const PivotTable = ({ data }) => {
  const [renderdata, setRenderData] = useState(data);
  return (
    <Container>
      <PivotTableUI
        data={renderdata}
        onChange={s => setRenderData(s)}
        {...renderdata}
      />
    </Container>
  );
};

export default PivotTable;
