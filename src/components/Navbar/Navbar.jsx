import React, { useState, useRef, useContext } from "react";
import logo from "../../assets/netflix.png";
import { NavLink, Link } from "react-router-dom";
import profile from "../../assets/profile.png";
import classes from "./navbar.module.css";
import { FaAngleDown } from "react-icons/fa";
import { AuthContext } from "../../AuthContext/AuthContext";
const Navbar = () => {
  const {user,onLogout} = useContext(AuthContext);
  const [showProfileDetails, setShowProfileDetails] = useState(false);
  const navRef = useRef();
  const navMenu = [
    {
      name: "Homepage",
      path: "/",
    },
    {
      name: "Series",
      path: "/series",
    },
    {
      name: "Movie",
      path: "/movies",
    },
    {
      name: "My List",
      path: "/mylist",
    },
  ];

  const navColorHandler = () => {
    console.log(window.screenY);
    if (window.scrollY >= 40) {
      navRef.current.style.background = "black";
    } else {
      navRef.current.style.background =
        "linear-gradient(to top, transparent 0%, rgb(0, 0, 0, 0.3) 50%)";
    }
  };

  window.addEventListener("scroll", navColorHandler);
  const logoutHandler=(e)=>{
    e.preventDefault();
    onLogout();

  }
  const showDetailsMenu = () => {
    setShowProfileDetails((p) => !p);
  };
  return (
    <nav className={classes.navbar} ref={navRef}>
      <div className={classes.container}>
        <div className={classes.leftnav}>
          <img className={classes.logo} src={logo} alt="" />
          {user && (
            <ul className={classes.navlist}>
              {navMenu.map((item) => (
                <li>
                  <NavLink to={item.path}>{item.name}</NavLink>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className={classes.navright}>
          { user ? (
            <>
              <img
                className={classes.profile}
                src={user.profilePic || profile}
                alt="profile pic"
              />
              <div className={classes.profile_details}>
                <FaAngleDown
                  className={`${classes.arrow} ${
                    showProfileDetails ? classes.arrowUp : ""
                  }`}
                  size={20}
                  onClick={showDetailsMenu}
                  color="white"
                />

                {showProfileDetails && (
                  <div className={classes.profile_details_menu}>
                    <li>
                      <NavLink to="/profile">Profile</NavLink>
                    </li>
                    <li onClick={logoutHandler}>Logout</li>
                  </div>
                )}
              </div>
            </>
          ) : null}
        </div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
