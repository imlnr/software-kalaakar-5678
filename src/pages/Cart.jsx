import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartCard from "../components/CartCard";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  // const [total, setTotal] = useState(0);

  let price = 0;
  if (cart.length > 0) {
    cart.forEach((element) => {
      price += element.coursePrice;
    });
    // setTotal(price);
  }
  return (
    <>
      {/* <h1>{JSON.stringify(cart)}</h1> */}
      <div>
        {cart.map((course, index) => {
          return <CartCard key={index} course={course} />;
        })}
      </div>
      <div>Total for all Courses : {price}</div>
      <button>
        <Link to="/payments">Make Payment</Link>
      </button>
    </>
  );
};

export default Cart;
