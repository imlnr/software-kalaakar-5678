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
    dispatch(getCourses("", 1));
  }, []);
  useEffect(() => {
    getPaginatedData(1);
  }, [courses]);
  let [paginatedData, setPaginatedData] = useState([]);
  // let paginatedData = [];
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const handleSearchInput = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    console.log("SUBMIT");
    e.preventDefault();
    dispatch(getCourses(search));
  };
  const handleFilter = (e) => {
    setFilter(e.target.value);
    dispatch(sortCourses(e.target.value));
  };
  const getPaginatedData = (page) => {
    const startIndex = (page - 1) * noOfItemsPerPage;
    const endIndex = startIndex + noOfItemsPerPage;
    console.log(startIndex, " ::", endIndex);
    paginatedData = courses.slice(startIndex, endIndex);
    setPaginatedData(paginatedData);
  };
  // if (courses) getPaginatedData(1);
  return (
    <>
      {/* <h1>NavBar</h1> */}
      {/* <p>{JSON.stringify(courses)}</p> */}
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
        {/* <div id="filters">Filters</div> */}
        <div id="courses">
          {/* <div id="resultsCount">
            <p>{courses.length} Results for {search ? search : available}</p>
            {courses && <p>{courses.length} Courses Available </p>}
            <select onChange={handleFilter} value={filter}>
              <option value="popular">Popularity</option>
              <option value="priceHighToLow">Price High To Low</option>
              <option value="priceLowToHigh">Price Low To High</option>
              <option value="duraLowToHigh">Duration Low to High</option>
              <option value="duraHighToLow">Duration High to Low</option>
            </select>
          </div> */}
          {search
            ? courses.map((course, index) => {
                return <CourseFWCard key={index} course={course} />;
              })
            : paginatedData &&
              paginatedData.map((course, index) => {
                return <CourseFWCard key={index} course={course} />;
              })}
          {/* {paginatedData &&
            paginatedData.map((course, index) => {
              return <CourseFWCard key={index} course={course} />;
            })} */}
          <div className="pagination">
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
