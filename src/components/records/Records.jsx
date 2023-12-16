import React, { useState } from "react";
import DropDown from "../../assets/DropDown.png";
import Filter from "../../assets/Funnel.png";
import AddNew from "../../assets/AddNew.png";
import Search from "../../assets/Records-Search.png";
import OverflowButton from "../../assets/OverflowButton.png";
import RecordsUser from "../../assets/User-sm.png";
import RecordsChat from "../../assets/recordsChat.png";
import Options from "../../assets/options.png";
import "./records.css";
const Records = (props) => {
  const [dataArray, setDataArray] = useState([
    {
      trainee: "Rahul Last Name",
      compliance: "44.5%",
      lastWorkout: "Jun 10th' 23",
      workoutPlan: "Plan 2 - Beginner",
      // lastModified: " Jun 10th' 23",
      // dietPlan: "Plan 2 - Beginner",
      // lastModifiedDp: "Jun 10th' 23",
      // trainer: "Tim Deboar",
      actions: "",
    },
  ]);
  const addData = () => {
    let data = {
      trainee: "Rahul Last Name",
      compliance: "44.5%",
      lastWorkout: "Jun 10th' 23",
      workoutPlan: "Plan 2 - Beginner",
      // lastModified: " Jun 10th' 23",
      // dietPlan: "Plan 2 - Beginner",
      // lastModifiedDp: "Jun 10th' 23",
      // trainer: "Tim Deboar",
      actions: "",
    };
    setDataArray([...dataArray, data]);
  };
  return (
    <div className={`Records ${props.show ? "open" : ""}`}>
      <div className="recordsHeader">
        <div className="left-header">
          <button className="active lh-in">
            Active<span className="num">16</span>
          </button>
          <button className="Pending lh-in">
            Pending<span className="num">16</span>
          </button>
          <button className="Archived lh-in">
            Archived<span className="num">8</span>
          </button>
        </div>
        <div className="right-header">
          <button className="addnew" onClick={addData}>
            <img src={AddNew} alt="" />
            Add New
          </button>
          <div className="recordsdash"></div>
          <div className="records-searchbar">
            <img src={Search} alt="" className="recordsSearch" />
            <input type="search" placeholder="Search Anything" />
          </div>
          <button className="filter-btn">
            <img src={Filter} alt="" className="funnel" />
            Filter by
            <img src={DropDown} alt="" className="dropdown" />
          </button>
        </div>
      </div>
      <table className="recordsTable">
        <thead>
          <tr style={{ height: "43px" }} className="heading-row">
            <th>
              <div className="head-checkbox">
                <input type="checkbox" className="checkbox" />
              </div>
            </th>
            <th style={{ width: "200px" }}>
              <div className="trainee">
                <span>Trainee</span>
                <img src={OverflowButton} alt="" />
              </div>
            </th>
            <th>Compliance</th>
            <th>Last Workout</th>
            <th>Workout Plan</th>
            {/* <th>Last Modified</th>
            <th>Diet Plan</th>
            <th>Last Modified</th>
            <th>Trainer</th> */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr style={{ height: "43px" }} className="data-row">
            <td>
              <div className="checkbox">
                <input type="checkbox" />
              </div>
            </td>
            <td>
              <div className="user-name">
                <img src={RecordsUser} alt="" />
                <span>Rahul Last Name</span>
              </div>
            </td>
            <td>
              <div className="compliance">44.5%</div>
            </td>
            <td>
              <div className="last-workout">Jun 10th' 23</div>
            </td>
            <td>
              <div className="workout-plan">Plan 2 - Beginner</div>
            </td>
            <td>
              <div className="last-modified">Jun 10th' 23</div>
            </td>
            <td>
              <div className="diet-plan">Plan 2 - Beginner</div>
            </td>
            <td>
              <div className="last-modified">Jun 10th' 23</div>
            </td>
            <td>
              <div className="trainer">Tim Deboar</div>
            </td>
            <td>
              <div className="actions">
                <img src={RecordsChat} alt="" />
                <img src={Options} alt="" />
              </div>
            </td>
          </tr> */}
          {dataArray.map((data, index) => {
            return (
              <tr key={index} style={{ height: "43px" }} className="data-row">
                <td>
                  <div className="checkbox">
                    <input type="checkbox" />
                  </div>
                </td>
                <td>
                  <div className="user-name">
                    <img src={RecordsUser} alt="" />
                    <span>{data.trainee}</span>
                  </div>
                </td>
                <td>
                  <div className="compliance">{data.compliance}</div>
                </td>
                <td>
                  <div className="last-workout">{data.lastWorkout}</div>
                </td>
                <td>
                  <div className="workout-plan">{data.workoutPlan}</div>
                </td>
                {/* <td>
                  <div className="last-modified">{data.lastModified}</div>
                </td> */}
                {/* <td>
                  <div className="diet-plan">{data.dietPlan}</div>
                </td> */}
                {/* <td>
                  <div className="last-modified">{data.lastModifiedDp}</div>
                </td> */}
                {/* <td>
                  <div className="trainer">{data.trainer}</div>
                </td> */}
                <td>
                  <div className="actions">
                    <img src={RecordsChat} alt="" />
                    <img src={Options} alt="" />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Records;
