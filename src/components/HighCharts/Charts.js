import React from "react";
// import { data } from "./Data";
import AreaChartGraph from "./AreaChart";
import { Container, Row } from "react-bootstrap";
import LineChartGrap from "./LineChart";
import BarChartGraph from "./BarChart";
import PieChartGraph from "./PieChart";
import { Brush } from "recharts";
import { getOcurrence } from "../../utils/getOccurence";

const Chart = ({ data }) => {
  const renderData = [
    {
      name: "We Work",
      TE: getOcurrence(data, "company", "We Work")
    },
    {
      name: "Google",
      TE: getOcurrence(data, "company", "Google")
    },
    {
      name: "Go Hive",
      TE: getOcurrence(data, "company", "Go Hive")
    },
    {
      name: "PWC",
      TE: getOcurrence(data, "company", "PWC")
    },
    {
      name: "Dafodil",
      TE: getOcurrence(data, "company", "Dafodil")
    },
    {
      name: "Expedia",
      TE: getOcurrence(data, "company", "Expedia")
    }
  ];
  console.log(renderData);
  return (
    <Container className="mt-3">
      <Row>
        <AreaChartGraph data={renderData} />
        <LineChartGrap data={renderData} />
        <BarChartGraph data={renderData} />
        <PieChartGraph />
        <Brush />
      </Row>
    </Container>
  );
};
export default Chart;
