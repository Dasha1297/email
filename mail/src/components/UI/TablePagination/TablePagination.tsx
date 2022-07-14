import { Pagination, PaginationItem } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

type TablePaginationPropsType = {
  count: number;
  page: number;
  handleChange: (event: React.ChangeEvent<unknown>, value: number) => void;
};

const TablePagination = ({
  count,
  page,
  handleChange,
}: TablePaginationPropsType) => {
  return (
    <Pagination
      count={count}
      page={page}
      onChange={handleChange}
      renderItem={(item) => (
        <PaginationItem
          component={Link}
          to={`${item.page === 1 ? `` : `?page=${item.page}`}`}
          {...item}
        />
      )}
    />
  );
};

export default TablePagination;
