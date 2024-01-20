import React from "react";
import { Link } from "react-router-dom";
import "../styles/Menubar.css";
// import '../styles/newMenu.css';
import { IoMenu } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useDisclosure } from "@chakra-ui/react";
import DrawerEx from "./DrawerEx";
import { NavDropdown } from "react-bootstrap";
const Menubar = () => {
  const cart = useSelector((state) => state.cart);
  const profile = useSelector((state) => state);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (<>
    <nav className="menuBar">
      <div className="menuContainer">
        <Link to="/" className="menu-link">
          Home
        </Link>
        <Link to="/about-us" className="menu-link">
          About Us
        </Link>
        <Link to="/" className="menu-link">
          Courses
        </Link>
        <Link to="/search" className="menu-link">
          Explore
        </Link>
        <Link to="/cart" className="menu-link">
          Cart({cart.length})
        </Link>
        {
          !profile.isLoggedIn ?
            <Link to="/login" className="menu-link">
              LogIn
            </Link> : null
        }
        {
          !profile.isLoggedIn ?
            <Link to="/sign-up" className="menu-link">
              SignUp
            </Link> : null
        }
        {
          profile.isLoggedIn ?
            <NavDropdown title={<img className="profile-imgs" src={profile.user.avatar} alt="" />} id="basic-nav-dropdown" className="profile-user-img">
              <NavDropdown.Item href="#" className="dropdown-item">
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="#" className="dropdown-item">
                Settings
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#" className="dropdown-item">
                Log out
              </NavDropdown.Item>
            </NavDropdown>
            : null
        }
        <DrawerEx isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
        <span className="menuIcon">
          <IoMenu />
        </span>
      </div>
    </nav>
  </>
  );
};

export default Menubar;
