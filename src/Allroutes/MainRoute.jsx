import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Cart from "../pages/Cart";
import PageNotFound from "../components/PageNotFound";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import { useSelector } from "react-redux";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/Profile";
import Courses from "../pages/Courses";
import Search from "../pages/Search";
import Payment from "../pages/Payment";
import AdminPanel from "../pages/AdminPanel";
import Loading from "../components/Loading";

const MainRoute = () => {
  const state = useSelector((state) => state.isLoggedIn);
  const isAdmin = useSelector((state) => state.user.role);
  console.log(isAdmin);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<PageNotFound />} />
      {!state ? <Route path="/login" element={<Login />} /> : null}
      {!state ? <Route path="/sign-up" element={<Signup />} /> : null}
      <Route path="/course/:id" element={<Courses />} />
      <Route path="/search" element={<Search />} />
      <Route path="/loading" element={<Loading />} />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      <Route path="/search" element={<Search />} />
      <Route path="/payments" element={<Payment />} />
      <Route
        path="/user-profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      {isAdmin === "admin" ? (
        <Route
          path="/admin-panel"
          element={
            <PrivateRoute>
              <AdminPanel />
            </PrivateRoute>
          }
        />
      ) : null}
    </Routes>
  );
};

export default MainRoute;
