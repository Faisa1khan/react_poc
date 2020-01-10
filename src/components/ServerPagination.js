import React, { useEffect, useState, useMemo } from "react";
import { Container, Spinner, Button } from "react-bootstrap";
import { useDebounce } from "../utils/hooks/useDebounce";
import Lists from "./listing/Lists";
import ListHeader from "./listing/ListHeader";
import ListFooter from "./listing/Pagination";
import { useApi } from "../utils/hooks/useApi";
import { connect } from "react-redux";
import fetchDataUsingApi from "../actionCreator/fetchDataMiddleware";
import { bindActionCreators } from "redux";
import { fetchDataDetails } from "../actionCreator";
const ServerPagination = props => {
  const [params, setParams] = useState({
    q: "",
    _page: 1,
    _limit: 10,
    _sort: "name",
    _order: "asc"
  });

  const queryParams = useMemo(() => params, [params]);
  const [data, isLoading, error, fetchData] = useApi("getPeople");

  // console.log(result);
  console.log("Being render");

  useEffect(() => {
    fetchData(queryParams);
    props.fetchDataDetails("http://localhost:3000/people", queryParams);
  }, [queryParams]);

  // useEffect(() => {
  //   props.fetchProducts();
  // }, []);

  if (error) {
    console.warn(JSON.stringify(error));
    return <p>{error.message}</p>;
  }

  return (
    <Container>
      <ListHeader paramsInput={{ params, setParams }} data={data} />
      {isLoading ? (
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
      <ListFooter paramsInput={{ params, setParams }} />
    </Container>
  );
};

const mapStateToProps = state => ({
  error: state.FetchData.error,
  data: state.FetchData.data,
  pending: state.FetchData.pending
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchProducts: fetchDataUsingApi,
      fetchDataDetails
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ServerPagination);
