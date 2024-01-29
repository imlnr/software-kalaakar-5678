import React, { useEffect, useMemo, useState } from "react";
import "./css/search.css";
import CourseFWCard from "../components/CourseFWCard";
import { useDispatch, useSelector } from "react-redux";
import { getCourses, sortCourses } from "../Redux/action-types";
import Pagination from "../components/Pagination";
import { GET_COURSES_SUCCESS, noOfItemsPerPage, url } from "../Redux/action";

const Search = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses);
  const isLoading = useSelector((state) => state.isLoading);
  const [filters, setFilters] = useState([]);
  useEffect(() => {
    dispatch(getCourses(""));
  }, []);
  useEffect(() => {
    getPaginatedData(1);
  }, [courses]);
  useEffect(() => {
    let query = "";
    filters.forEach((filter) => {
      query += `courseTitle_like=${filter}&`;
    });
    // fetch(`${url}?${query}`);
    console.log(`${url}/courses?${query}`);
    dispatch(getCourses(`${query}`));
    // fetch(`${url}/courses?${query}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     dispatch({
    //       type: GET_COURSES_SUCCESS,
    //       payload: { courses: data },
    //     });
    //   });
  }, [filters]);
  let [paginatedData, setPaginatedData] = useState([]);
  const [search, setSearch] = useState("");
  const handleSearchInput = (e) => {
    setSearch(e.target.value);
  };
  const addFilter = (e) => {
    console.log();
    let filt = [...filters];
    !filt.includes(e.target.value) && filt.push(e.target.value);
    if (e.target.checked) {
      setFilters([...filters, e.target.value]);
    } else {
      const updatedFilters = filters.filter(
        (filter) => filter !== e.target.value
      );
      setFilters(updatedFilters);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hdsdbvsj");
    dispatch(getCourses(`courseTitle_like=${search}`));
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
      {/* <p>{JSON.stringify(filters)}</p> */}
      {isLoading && <h1>Loading</h1>}
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
        <div id="filterSection">
          <div className="filter">
            <input
              type="checkBox"
              name="Data"
              value="Data"
              onClick={addFilter}
              className="filterCheckBox"
            />
            <label className="filterLabel">Data</label>
          </div>
          <div className="filter">
            <input
              type="checkBox"
              name="Data"
              value="Artificial%20Intelligence"
              onClick={addFilter}
              className="filterCheckBox"
            />
            <label className="filterLabel">Artificial Intelligence</label>
          </div>
          <div className="filter">
            <input
              type="checkBox"
              name="Data"
              value="Physics"
              onClick={addFilter}
              className="filterCheckBox"
            />
            <label className="filterLabel">Physics</label>
          </div>
          <div className="filter">
            <input
              type="checkBox"
              name="Data"
              value="Business"
              onClick={addFilter}
              className="filterCheckBox"
            />
            <label className="filterLabel">Business</label>
          </div>
          <div className="filter">
            <input
              type="checkBox"
              name="Data"
              value="Engineering"
              onClick={addFilter}
              className="filterCheckBox"
            />
            <label className="filterLabel">Engineering</label>
          </div>
        </div>
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
