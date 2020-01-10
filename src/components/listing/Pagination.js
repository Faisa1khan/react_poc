import React from "react";
import Pagination from "rc-pagination";
import localeInfo from "rc-pagination/lib/locale/en_US";
import "rc-pagination/assets/index.css";

const ListFooter = ({ pageSize, setCurrentPage, paramsInput }) => {
  const { params, setParams } = paramsInput;
  const onShowSizeChange = (current, pageSize) => {
    console.log(current);
    console.log(pageSize);
  };

  const handlePageChange = (current, pageSize) => {
    setParams({ ...params, _page: current });
    // setCurrentPage(current);
    console.log("onChange:current=", current);
  };

  return (
    <Pagination
      showQuickJumper
      showSizeChanger
      defaultPageSize={10}
      pageSize={parseInt(params._limit)}
      defaultCurrent={1}
      total={100}
      locale={localeInfo}
      onShowSizeChange={onShowSizeChange}
      onChange={handlePageChange}
    />
  );
};

export default ListFooter;
