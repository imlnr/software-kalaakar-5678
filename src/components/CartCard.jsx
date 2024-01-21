import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./css/cartCard.css";
import { deleteFromCart } from "../Redux/action-types";
import { useToast } from "@chakra-ui/react";

const CartCard = ({ course }) => {
  let dispatch = useDispatch();
  let toast = useToast();
  const dropFromCourse = () => {
    toast({
      title: "Course removed from the cart.",
      status: "success",
      duration: 1000,
      isClosable: true,
    });
    dispatch(deleteFromCart(course));
  };
  return (
    <div className="cartCard">
      {/* <div>{JSON.stringify(course)}</div> */}
      <div>
        <img src={`${course.courseImage}`} />
        <div className="cartPrice">Rs. {course.coursePrice}/-</div>
      </div>
      <div className="cartDesc">
        <div className="cartTitle">{course.courseTitle}</div>
        <div className="cartDescription">{course.description}</div>
        <div className="cartAuthor">Dr. {course.author}</div>
        <span className="level">{course.level} Level</span>
        <span> - </span>
        <span className="catDuration">{course.duration} minutes</span>
        <div className="cartRating">
          <span>Ratings : {course.rating}</span>{" "}
          <span>({course.reviews} Reviews)</span>
        </div>
        {course.language && (
          <div className="cartLaguages">
            Languages Available : {course.language.join(", ")}
          </div>
        )}
        <div className="cartSkills">
          <strong>Skills you'll gain : </strong>
          {course.skills.join(", ")}
        </div>
        <div className="cartPriceSection">
          {/* <div className="coursePrice">Rs. {course.coursePrice}/-</div> */}
          <button className="dropButton" onClick={dropFromCourse}>
            Remove from Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
