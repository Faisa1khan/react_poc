import React from "react";
import { data } from "./Data";
import AreaChartGraph from "./AreaChart";
import { Container, Row } from "react-bootstrap";
import LineChartGrap from "./LineChart";
import BarChartGraph from "./BarChart";
import PieChartGraph from "./PieChart";
import { Brush } from "recharts";

const Chart = () => {
  return (
    <Container className="mt-3">
      <Row>
        <AreaChartGraph data={data} />
        <LineChartGrap data={data} />
        <BarChartGraph data={data} />
        <PieChartGraph />
        <Brush />
      </Row>
    </Container>
  );
};

export default Chart;
