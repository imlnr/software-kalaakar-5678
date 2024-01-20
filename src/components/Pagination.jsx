import React from "react";
import { getCourses } from "../Redux/action-types";
import { useDispatch } from "react-redux";

const Pagination = ({ pages, getPaginatedData }) => {
  console.log("OAGES : : : : ", pages);
  let dispatch = useDispatch();
  const pageNumbers = Array.from({ length: pages }, (_, index) => index + 1);
  const handleClick = (page) => {
    console.log(page);
    getPaginatedData(page);
  };
  return (
    <>
      {pageNumbers.map((page) => {
        return (
          <button
            className="paginationButtons"
            onClick={() => {
              handleClick(page);
            }}
          >
            {page}
          </button>
        );
      })}
    </>
  );
};

export default Pagination;
