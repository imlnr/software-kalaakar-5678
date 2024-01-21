import React from "react";
import { getCourses } from "../Redux/action-types";
import { useDispatch } from "react-redux";

const Pagination = ({ pages }) => {
  let dispatch = useDispatch();
  const pageNumbers = Array.from({ length: pages }, (_, index) => index + 1);
  //   const handleClick = (page) => {
  //     dispatch(getCourses("", page));
  // New Line
  //   };
  return (
    <div>
      {/* {pageNumbers.map((page) => {
        return <button onClick={handleClick(page)}>{page}</button>;
      })} */}
    </div>
  );
};

export default Pagination;
