import React,{useState} from "react";
import Search from "../../assets/Search.png";
import Notification from '../../assets/Frame.png'
import User from '../../assets/User.png';
import ChatSparkle from '../../assets/ChatSparkle.png';
import "./topbar.css";
const Topbar = (props) => {
 
  return (
    <div className="Topbar">
      <div className="left-tb">
        <p>Home</p>
      </div>
      <div className="mid-tb">
        <img src={Search} alt="" />
        <input type="text" placeholder="Search anything" />
      </div>
      <div className="right-tb">
          <img className="notification-btn" src={Notification} alt="" />
          <button onClick={props.toggleAc}>
            <img src={ChatSparkle} alt="" />
            Ask Copilot
          </button>
          <img className="user-btn" src={User} alt="" />
      </div>
    </div>
  );
};

export default Topbar;
