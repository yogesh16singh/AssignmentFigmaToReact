import React, { useState } from "react";
import Topbar from "../topbar/Topbar";
import Records from "../records/Records";
import "./mainContent.css";
const MainContent = () => {

  return (
    <div className="MainContent">
      <Topbar />
      <div className="data-records">
        <Records />
      </div>
    </div>
  );
};

export default MainContent;
