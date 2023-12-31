import React, { useState } from "react";
import DropDown from "../../assets/Dropdown.png";
import Filter from "../../assets/Funnel.png";
import AddNew from "../../assets/AddNew.png";
import Search from "../../assets/Records-Search.png";
import OverflowButton from "../../assets/OverflowButton.png";
import RecordsUser from "../../assets/User-sm.png";
import RecordsChat from "../../assets/recordsChat.png";
import Options from "../../assets/options.png";
import "./records.css";
const Records = () => {
  const [dataArray, setDataArray] = useState([
    {
      trainee: "Rahul Last Name",
      compliance: "44.5%",
      lastWorkout: "Jun 10th' 23",
      workoutPlan: "Plan 2 - Beginner",
      lastModified: " Jun 10th' 23",
      dietPlan: "Plan 2 - Beginner",
      lastModifiedDp: "Jun 10th' 23",
      trainer: "Tim Deboar",
      actions: "",
    },
  ]);
  const [name, setName] = useState();
  const [display, setDisplay] = useState();

  const updatename = (data, index) => {
    setDisplay(index);
    setName(data.trainee);
  }
  const handleSubmit = (index) => {
    let updatedarray = [...dataArray];
    updatedarray[index] = { ...updatedarray[index], trainee: name };
    setDataArray(updatedarray);
    setDisplay(-1);
  }

  const addData = () => {
    let data = {
      trainee: "Rahul Last Name",
      compliance: "44.5%",
      lastWorkout: "Jun 10th' 23",
      workoutPlan: "Plan 2 - Beginner",
      lastModified: " Jun 10th' 23",
      dietPlan: "Plan 2 - Beginner",
      lastModifiedDp: "Jun 10th' 23",
      trainer: "Tim Deboar",
      actions: "",
    };
    setDataArray([...dataArray, data]);
  };
  return (
    <div className={`Records `}>
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
            <th>Last Modified</th>
            <th>Diet Plan</th>
            <th>Last Modified</th>
            <th>Trainer</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
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
                    {(display != index) &&
                      <span onDoubleClick={() => { updatename(data, index) }}>{data.trainee}</span>}
                    {(display == index) && (
                      <div className="flex">
                        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="enter"></input>
                        <button className="rounded-2 border-2" onClick={() => handleSubmit(index)}>submit</button>
                      </div>
                    )}
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
                <td>
                  <div className="last-modified">{data.lastModified}</div>
                </td>
                <td>
                  <div className="diet-plan">{data.dietPlan}</div>
                </td>
                <td>
                  <div className="last-modified">{data.lastModifiedDp}</div>
                </td>
                <td>
                  <div className="trainer">{data.trainer}</div>
                </td>
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
