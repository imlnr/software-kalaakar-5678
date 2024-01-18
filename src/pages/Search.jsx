import React, { useEffect, useState } from 'react'
import "./css/search.css"
import CourseFWCard from '../components/CourseFWCard'
import { useDispatch, useSelector } from 'react-redux'
import {  getCourses } from '../Redux/action-types'

const Search = () => {
  const dispatch = useDispatch();
  let searchfield = "";
  const courses = useSelector((state) => state.courses) 
  useEffect(() => { 
    dispatch(getCourses())  
  },[]) 
  console.log("courses in search : ", courses) 
  const [search, setSearch] = useState("");
  const handleSearchInput = (e) => {  
    setSearch(e.target.value);
  }
  const handleSubmit = (e) => { 
    console.log("SUBMIT")
    e.preventDefault();
    searchfield = search;
    dispatch(getCourses(search))  
  }
  return (
   <>
      <h1>NavBar</h1>
      {/* <p>{ JSON.stringify(courses)}</p> */}
      <form onSubmit={handleSubmit}>
        <input type='text' id='searchInput' value={search} onChange={handleSearchInput}  />
      </form>
      <div id="coursesPage">
        <div id="filters" >Filters</div>
        <div id="courses" >
          <div id="resultsCount" >
            {/* <p>{courses.length} Results for {search ? search : available}</p> */}
            {<p>{courses.length} Courses Available </p>}
            <select >
              <option  >Popularity</option>
              <option>Price High To Low</option>
              <option>Price Low To High</option>
              <option>duration Low to High</option>
              <option>duration High to Low</option>
            </select>
          </div>
          {courses.map((course,index) => {
      return <CourseFWCard key={index} course={course} />
    })}
        </div>
      </div>
      <h1>Footer</h1>
    </>
  )
}

export default Search