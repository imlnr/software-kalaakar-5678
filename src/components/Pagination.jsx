import React from "react";
import { getCourses } from "../Redux/action-types";
import { useDispatch } from "react-redux";

const Pagination = ({ pages, getPaginatedData }) => {
  let dispatch = useDispatch();
  const pageNumbers = Array.from({ length: pages }, (_, index) => index + 1);
  const handleClick = (page) => {
    console.log("dibsdgsdfgdv", page);
    getPaginatedData(page);
  };
  return (
    <div>
      {pageNumbers.map((page, index) => {
        return (
          <button
            className="paginationButtons"
            key={index}
            onClick={() => {
              handleClick(page);
            }}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
