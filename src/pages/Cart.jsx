import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartCard from "../components/CartCard";
import { Link } from "react-router-dom";
import "./css/cart.css";
import { set_cart_price } from "../Redux/action-types";

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
  const handleextraclick = () => {
    dispatch(set_cart_price(price));
  };
  return (
    <>
      {cart.length > 0 ? (
        <div>
          {cart.map((course, index) => {
            return <CartCard key={index} course={course} />;
          })}
          <div className="totalPrice">Total for all Courses : Rs. {price}</div>
          <div className="paymentButtonDiv">
            <button
              className="paymentButton"
              onClick={() => dispatch(set_cart_price(price))}
            >
              <Link to="/payments">Make Payment</Link>
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="emptyCart">
            <div className="emptyCartTitle">Cart is empty </div>
            <div className="emptyCartMessage">Add Items to the cart</div>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
