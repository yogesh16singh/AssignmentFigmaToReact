import React from "react";
import Home from "../../assets/Home.jpg";
import Message from "../../assets/Message.png";
import Briefcase from "../../assets/Briefcase.png";
import File from "../../assets/File.png";
import Setting from "../../assets/Setting.png";
import Logo from "../../assets/logo.png";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="nav-top">
        <img src={Logo} alt="" />
        <div className="dash"></div>
        <ul>
          <li>
            <img src={Home} alt="" />
          </li>
          <li>
            <img src={Message} alt="" />
          </li>
          <li>
            <img src={Briefcase} alt="" />
          </li>
          <li>
            <img src={File} alt="" />
          </li>
        </ul>
      </div>
      <div className="nav-bottom">
        <img src={Setting} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
