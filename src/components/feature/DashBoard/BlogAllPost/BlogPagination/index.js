import React from "react";
import { Pagination } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomPagination = styled(Pagination)(({ theme }) => ({
  "& .MuiPaginationItem-root": {
    backgroundColor: "white",
    color: "#000",
    fontSize: "1rem",
    border: "1px solid #ddd",
    "&:hover": {
      backgroundColor: "#f0f0f0",
    },
  },
  "& .MuiPaginationItem-previousNext": {
    fontSize: "1.5rem",
    color: "lightgray",
    "&.Mui-selected": {
      color: "#18dfda !important",
    },
  },
  "& .Mui-selected": {
    color: "#fff",
    backgroundColor: "#16d6db !important",
  },
}));

const BlogPagination = ({ page, count, onChange }) => {
  return (
    <CustomPagination
      count={count}
      page={page}
      onChange={onChange}
      shape="rounded"
      siblingCount={1}
      boundaryCount={1}
    />
  );
};

export default BlogPagination;
