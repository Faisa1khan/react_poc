import React, { useEffect, useState, useMemo, useCallback } from "react";
import { Container, Spinner, Button } from "react-bootstrap";
import Lists from "./listing/Lists";
import ListHeader from "./listing/ListHeader";
import ListFooter from "./listing/Pagination";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchDataDetails } from "../actionCreator";
import Chart from "./HighCharts/Charts";
const ServerPagination = props => {
  console.log(props.data, props.isLoading);
  const { data = [], isLoading, fetchDataDetails } = props;
  const [chart, showChart] = useState(false);
  console.log(chart);
  const [params, setParams] = useState({
    q: "",
    _page: 1,
    _limit: 10,
    _sort: "name",
    _order: "asc"
  });

  const queryParams = useMemo(() => params, [params]);
  console.log("Being render");

  useEffect(() => {
    fetchDataDetails("http://localhost:4000/employee", queryParams);
  }, [queryParams]);

  // if (error) {
  //   console.warn(JSON.stringify(error));
  //   return <p>{error.message}</p>;
  // }

  return (
    <Container>
      <ListHeader
        paramsInput={{ params, setParams, chart, showChart }}
        data={data}
      />

      {chart ? (
        <Chart data={data} />
      ) : isLoading ? (
        <Button variant="primary" disabled className="mb-2">
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </Button>
      ) : (
        <Lists data={data} paramsInput={{ params, setParams }} />
      )}
      {!chart && <ListFooter paramsInput={{ params, setParams }} />}
    </Container>
  );
};

const mapStateToProps = state => ({
  data: state.api.data,
  isLoading: state.api.isLoadingData
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchDataDetails
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ServerPagination);
