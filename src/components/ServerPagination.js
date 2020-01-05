import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import endpoint from "../endpoint";
import { useDebounce } from "../utils/hooks/useDebounce";
import Lists from "./listing/Lists";
import ListHeader from "./listing/ListHeader";
import ListFooter from "./listing/Pagination";
import { useApi } from "../utils/hooks/useApi";

const ServerPagination = () => {
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [searchInput, setSearchInput] = useState("");
  const input = useDebounce(searchInput, 500); // debounce input value
  const [data, setData] = useState([]);
  const [result, isLoading, error, fetchData] = useApi("getPeople");

  // console.log(result);
  console.log(result, isLoading, fetchData());

  // Effect for API call
  useEffect(() => {
    console.log("i was called");
    axios
      .get(endpoint + "people", {
        params: {
          q: input,
          _page: currentPage,
          _limit: pageSize,
          _sort: sortBy,
          _order: sortOrder
        }
      })
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, [currentPage, pageSize, sortBy, sortOrder, input]);

  return (
    <Container>
      <ListHeader
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setSortOrder={setSortOrder}
        setSortBy={setSortBy}
        setPageSize={setPageSize}
        pageSize={pageSize}
      />
      <Lists data={data} setSortBy={setSortBy} />
      <ListFooter pageSize={pageSize} setCurrentPage={setCurrentPage} />
    </Container>
  );
};

export default ServerPagination;
