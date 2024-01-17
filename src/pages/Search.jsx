import React, { useEffect, useState } from 'react'
import "./css/search.css"
import CourseFWCard from '../components/CourseFWCard'
import { useDispatch, useSelector } from 'react-redux'
import { getCollege } from '../Redux/action-types'

const Search = () => {
  const dispatch = useDispatch(); 
  const colleges = useSelector((state) => state.colleges) 
  useEffect(() => { 
    dispatch(getCollege())  
  },[]) 
  console.log("COlleges in search : ", colleges)
  localStorage.setItem("courses", [{ }]);
  
  return (
   <>
      <h1>NavBar</h1>
      {/* <p>{ JSON.stringify(colleges)}</p> */}
      <div id="coursesPage">
        <div id="filters" >Filters</div>
        <div id="courses" >
          <div id="resultsCount" >
            <p>50 Results for "Input Field"</p>
            <select >
              <option  >Popularity</option>
              <option>Price High To Low</option>
              <option>Price Low To High</option>
              <option>duration Low to High</option>
              <option>duration High to Low</option>
            </select>
          </div>
          {colleges.map((college,index) => {
      return <CourseFWCard key={index} college={college} />
    })}
        </div>
      </div>
      <h1>Footer</h1>
    </>
  )
}

export default Search