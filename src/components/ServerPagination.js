import React, { useEffect, useState } from "react";
import { Container, Spinner, Button } from "react-bootstrap";
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

  const [data, isLoading, error, fetchData] = useApi("getPeople", {
    q: input,
    _page: currentPage,
    _limit: pageSize,
    _sort: sortBy,
    _order: sortOrder
  });

  // console.log(result);
  console.log("Being render");

  useEffect(() => {
    fetchData();
  }, [currentPage, pageSize, sortBy, sortOrder, input]);

  if (error) {
    console.warn(JSON.stringify(error));
    return <p>{error.message}</p>;
  }

  return (
    <Container>
      <ListHeader
        data={data}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setSortOrder={setSortOrder}
        setSortBy={setSortBy}
        setPageSize={setPageSize}
        pageSize={pageSize}
      />
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
        <Lists data={data} setSortBy={setSortBy} />
      )}
      <ListFooter pageSize={pageSize} setCurrentPage={setCurrentPage} />
    </Container>
  );
};

export default ServerPagination;
