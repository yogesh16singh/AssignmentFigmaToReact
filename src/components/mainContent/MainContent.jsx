import React, { useState } from "react";
import Topbar from "../topbar/Topbar";
import Records from "../records/Records";
import AskCopilot from "../askCopilot/AskCopilot";
import "./mainContent.css";
const MainContent = () => {
  const [showAc, setShowAc] = useState(false);

  const toggleAc = () => {
    if (showAc) {
      setShowAc(false);
    } else {
      setShowAc(true);
    }
  };
  return (
    <div className="MainContent">
      <Topbar toggleAc={toggleAc} />
        <div className="data-records">
          <Records show={showAc} />
          {showAc && <AskCopilot />}
        </div>
    </div>
  );
};

export default MainContent;
