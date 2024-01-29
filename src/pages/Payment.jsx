import React from 'react'
import { Container, useToast } from '@chakra-ui/react'
import { Modal } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from "react-redux";
// import styles from '../style/bagpage.module.css'
import "./css/payments.css";
import { RESET_CART } from '../Redux/action';



 const Payment = () => {
  const [discount, setDiscount] = useState(0);
  const [amt, setAmt] = useState(0);
  const [bagData, setBagData] = useState([]);
  const [address, setaddress] = useState(true);
  const [setpayment, setShowPaymentForm] = useState(false);
  const [card, setcard] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();
  const dispatch = useDispatch();
  function placeOrder() {
    setaddress(true)
  }
  const cardpaymentoption = () => {
    setcard(true);
  }

  // let length = 0;
  // useEffect(() => {
  //   // Fetch bag data from local storage when the component mounts
  //   const storedBagData = JSON.parse(localStorage.getItem("bag")) || [];
  //   console.log("Number of objects in bag:", storedBagData.length);
  //   setAmt(storedBagData.length)
  //   setBagData(storedBagData);
  // }, []);
  // console.log(length);
  // const removeFromBag = (productId) => {
  //   const updatedBag = bagData.filter((product) => product.id !== productId);
  //   setBagData(updatedBag);
  //   localStorage.setItem("bag", JSON.stringify(updatedBag));
  // };

  const subtotal = bagData.reduce((total, product) => total + product.price, 0);
  const taxRate = 0.02;
  const tax = subtotal * taxRate;

  const handleShippingSubmit = (e) => {
    e.preventDefault();
    alert("Please complete your payment")
    setShowPaymentForm(true);
  };


  const handlePaymentSubmit = (e) => {
    e.preventDefault()
    toast({
      title: 'Payment Successfull.',
      description: "You can access the Course in profile section.",
      status: 'success',
      duration: 9000,
      isClosable: true,
    });
    setTimeout(function () {
      // alert("Payment Successfull ");
      navigate('/');
    }, 2000);
    // dispatch
    dispatch({type:RESET_CART})
  }
  const cart = useSelector((state) => state.cart);
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
      {/* <div className={styles.cartandpaymentbox}>
        <div className={styles.firstbox}>
          {bagData.map((temp) => (
            <div key={temp.id} className={styles.cartbox}>
              <img className={styles.cartImage} src={temp.avatar} alt="" />
              <div className={styles.cartdetails}>
                <strong style={{ marginLeft: "-115px" }}>{temp.brand}</strong>
                <p>{temp.about}</p>
                <p>Rs : {temp.price}</p>
                <button className={styles.removeButton} onClick={() => removeFromBag(temp.id)}> <strong style={{ color: "white" }}>X</strong></button>
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className={styles.cardandPayment}>
            {/* Content for the right section */}

            {/* <div>
              <h3 className={styles.cardgiftHeading}>Gifting & Personalisation</h3>
              <div className={styles.giftcard}>
                <img src="https://constant.myntassets.com/checkout/assets/img/gift-big.webp" alt="" />
                <div className={styles.giftHeading}>
                  <h4 style={{ fontWeight: "bold" }}>Is this a gift for someone special?</h4>
                  <div>Add gift wrapping  on the card, only for ₹50</div>
                  <button className={styles.gitfbutton}>WRAP IT</button>
                </div>
              </div>
            </div>


            <div className={styles.paymentCard}>
              <h3 style={{ fontWeight: "bold" }}>Price Details</h3>
              <div className={styles.details}>
                <div>Subtotal</div>
                <div>₹{subtotal}</div>
              </div>
              <div className={styles.details}>
                <div>Tax Rate</div>
                <div>{(taxRate * 100).toFixed(2)}%</div>
              </div>
              <div className={styles.details}>
                <div>Tax</div>
                <div>₹{tax.toFixed(2)}</div>
              </div> */}
              {/* Other details... */}
              {/* <hr />
              <div className={styles.details}>
                <div>Total Amount</div>
                <div>₹{(subtotal + tax).toFixed(2)}</div>
              </div>
              <div>
                <button onClick={placeOrder} className={styles.gitfbutton} disabled={subtotal <= 0}>
                  PLACE ORDER
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/*  shipping address */}
      <div className='addresspaymentbhai'>
        {address && <div className='formContainerStyle'>
          <h2 className='headingStyle'>Billing Address</h2>
          <form onSubmit={handleShippingSubmit}>
            <div className='formRowStyle'>
              <div className='formGroupStyle'>
                <label htmlFor="firstName" className='labelStyle'>
                  Full Name <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Enter your first name"
                  required
                  className='inputStyle'
                />
              </div>

              <div className='formGroupStyle'>
                <label htmlFor="landmark" className='labelStyle'>
                  Landmark <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  id="landmark"
                  placeholder="Enter a landmark"
                  required
                  className='inputStyle'
                />
              </div>
              <div className='formGroupStyle'>
                <label htmlFor="city" className='labelStyle'>
                  City <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  placeholder="Enter your city"
                  required
                  className='inputStyle'
                />
              </div>
              <div className='formGroupStyle'>
                <label htmlFor="state" className='labelStyle'>
                  State <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  id="state"
                  placeholder="Enter your state"
                  required
                  className='inputStyle'
                />
              </div>
              <div className='formGroupStyle'>
                <label htmlFor="pinCode" className='labelStyle'>
                  Pin Code <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  id="pinCode"
                  placeholder="Enter your pin code"
                  required
                  className='inputStyle'
                />
              </div>
            </div>
            <button onClick={cardpaymentoption} type="submit" className='buttonStyle'>
              Submit
            </button>
          </form>
        </div>}

        {/* payment card debit/credit */}
        {card &&
          <div className='formContainerStyle'> <form onSubmit={handlePaymentSubmit}>
            <div className='formGroupStyle'>
              <label htmlFor="amount" className='labelStyle'>
                Amount <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                id="amount"
                name="amount"
                value={`Rs. ${price}`}
                placeholder=" Enter Amount"
                required
                className='inputStyle'

              />
            </div>
            <div className='formGroupStyle'>
              <label htmlFor="cardNumber" className='labelStyle'>
                Card Number <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="number"
                id="cardNumber"
                name="cardNumber"
                placeholder="Enter your card number"
                required
                className='inputStyle'
              />
            </div>
            <div className='formGroupStyle'>
              <label htmlFor="cardHolder" className='labelStyle'>
                Card Holder <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                id="cardHolder"
                name="cardHolder"
                placeholder="Enter the cardholder's name"
                required
                className='inputStyle'
              />
            </div>
            <div className='formGroupStyle'>
              <label htmlFor="expiryDate" className='labelStyle'>
                Expiry Date <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="number"
                id="expiryDate"
                name="expiryDate"
                placeholder="MM/YY"
                required
                className='inputStyle'
              />
            </div>
            <div className='formGroupStyle'>
              <label htmlFor="cvc" className='labelStyle'>
                CVV <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="number"
                id="cvc"
                name="cvc"
                placeholder="Enter the security code"
                required
                className='inputStyle'
              />
            </div>
            <button type="submit" className='buttonStyle'>
              Pay Now
            </button>
          </form>
          </div>
        }
      </div>




    </>
  );
};
export default Payment;

