import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Menubar.css";
// import '../styles/newMenu.css';
import { IoMenu } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useDisclosure } from "@chakra-ui/react";
import DrawerEx from "./DrawerEx";
import { NavDropdown } from "react-bootstrap";
import { CHANGE_LOGIN_STATUS} from "../Redux/action";
const Menubar = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const profile = useSelector((state) => state);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const handleLogout = ()=>{
    dispatch({type:CHANGE_LOGIN_STATUS,payload:false})
    navigate('/');
  }
  return (<>
    <nav className="menuBar">
      <div className="menuContainer">
        <Link to="/" className="menu-link">
          Home
        </Link>
        <Link to="/about-us" className="menu-link">
          About Us
        </Link>
        <Link to="/search" className="menu-link">
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
          <div className="user-login-profile">
            <NavDropdown title={<img className="profile-imgs" src={profile.user.avatar} alt="" />} id="basic-nav-dropdown" className="profile-user-img">
              <NavDropdown.Item href="#" className="dropdown-item">
              <Link to="/user-profile">
                Profile
              </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#" className="dropdown-item">
                <Link to="#">
                Settings
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleLogout} href="#" className="dropdown-item">
                Log out
              </NavDropdown.Item>
            </NavDropdown>
          </div>
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