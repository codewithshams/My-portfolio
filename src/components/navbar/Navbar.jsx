import React, { useState } from "react";
import img from '../../images/logo.png'
import { Clear, Dehaze, FacebookOutlined, GitHub, Twitter } from "@mui/icons-material";

import "./navbar.css";


const Navbar = () => {
  const [isShow, setIsShow] = useState(false);
  const navToggler = () => {
    setIsShow(!isShow)
  }

  return (
    <>
      <nav>
        <span className="logo">
          {" "}
          <img src={img} className="logo" alt="" />{" "}
        </span>
        <span onClick={navToggler} className="bargar-span">
          {isShow ? <Clear /> : <Dehaze />}
        </span>
        <ul className={isShow ? "show" : "hide"}>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#AboutUs">About us</a>
          </li>
          <li>
            <a href="#Tools">Tools</a>
          </li>
          <li>
            <a href="#ContectUs">Contect Us</a>
          </li>
          <div className="icons">
            <a href="https://web.facebook.com/profile.php?id=100052789111523">
              <FacebookOutlined className="nav-icon" />
            </a>
            <a href="">
              <Twitter className="nav-icon" />
            </a>

            <a href="https://github.com/smahsru/animated-web.github.io">
              <GitHub className="nav-icon" />
            </a>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
