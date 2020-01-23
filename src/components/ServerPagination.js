import React, { useEffect, useState, useMemo, Fragment } from "react";
import { Container, Button } from "react-bootstrap";
import Lists from "./listing/Lists";
import ListHeader from "./listing/ListHeader";
import ListFooter from "./listing/Pagination";
import { connect } from "react-redux";
import { fetchDataDetails } from "../actionCreator";
import Chart from "./HighCharts/Charts";
import Loading from "./Loader/Loading";
import PivotTable from "./PivotTable/Table";

const ServerPagination = props => {
  console.log(props.data, props.isLoading);
  const { data = [], isLoading, fetchDataDetails } = props;
  // const [data, setData] = useState([]);
  const [mode, setMode] = useState("List");
  const [params, setParams] = useState({
    q: "",
    _page: 1,
    _limit: 10,
    _sort: "name",
    _order: "asc"
  });

  const queryParams = useMemo(() => params, [params]);

  useEffect(() => {
    console.log("Call effect");
    fetchDataDetails("http://localhost:4000/employee", queryParams);
  }, [queryParams]);

  return (
    <Container>
      <ListHeader
        paramsInput={{ params, setParams, mode, setMode }}
        data={data}
      />
      {isLoading && <Loading />}
      {mode === "List" && (
        <Fragment>
          <Lists data={data} paramsInput={{ params, setParams }} />
          <ListFooter paramsInput={{ params, setParams }} />
        </Fragment>
      )}

      {mode === "Chart" && <Chart data={data} />}
      {mode === "PivotTable" && <PivotTable data={data} />}
    </Container>
  );
};

const mapStateToProps = state => ({
  data: state.api.data,
  isLoading: state.api.isLoadingData
});

const mapDispatchToProps = {
  fetchDataDetails
};

export default connect(mapStateToProps, mapDispatchToProps)(ServerPagination);
