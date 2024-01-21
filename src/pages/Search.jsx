import React, { useEffect, useMemo, useState } from "react";
import "./css/search.css";
import CourseFWCard from "../components/CourseFWCard";
import { useDispatch, useSelector } from "react-redux";
import { getCourses, sortCourses } from "../Redux/action-types";
import Pagination from "../components/Pagination";
import { noOfItemsPerPage } from "../Redux/action";

const Search = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses);
  useEffect(() => {
    dispatch(getCourses(""));
  }, []);
  useEffect(() => {
    getPaginatedData(1);
  }, [courses]);
  let [paginatedData, setPaginatedData] = useState([]);
  const [search, setSearch] = useState("");
  const handleSearchInput = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hdsdbvsj");
    dispatch(getCourses(search));
  };
  const getPaginatedData = (page) => {
    const startIndex = (page - 1) * noOfItemsPerPage;
    const endIndex = startIndex + noOfItemsPerPage;
    paginatedData = courses.slice(startIndex, endIndex);
    console.log(paginatedData);
    setPaginatedData(paginatedData);
  };
  return (
    <>
      {/* <p>{JSON.stringify(paginatedData)}</p> */}
      <form onSubmit={handleSubmit}>
        <div id="searchInputDiv">
          <input
            type="text"
            id="searchInput"
            value={search}
            onChange={handleSearchInput}
          ></input>
          <button id="searchButton">Search</button>
        </div>
      </form>
      <div id="coursesPage">
        <div id="courses">
          {search
            ? paginatedData.map((course, index) => {
                return <CourseFWCard key={index} course={course} />;
              })
            : paginatedData &&
              paginatedData.map((course, index) => {
                return <CourseFWCard key={index} course={course} />;
              })}

          <div className="pagination">
            {/* <h1>hdbshbd</h1> */}
            {paginatedData && (
              <Pagination
                getPaginatedData={getPaginatedData}
                pages={Math.ceil(courses.length / noOfItemsPerPage)}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
