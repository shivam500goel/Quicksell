import React, { useEffect, useState } from "react";
import { BsSliders2 } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import "./TopNav.css";
import { useDispatch, useSelector } from "react-redux";
import { selectData } from "../../Actions/DataAction";

const getGroup = () => {
  // Get the grouping value from localStorage or set a default value
  return localStorage.getItem("group") || "status";
};

const getOrder = () => {
  // Get the ordering value from localStorage or set a default value
  return localStorage.getItem("order") || "priority";
};

const TopNav = () => {
  const [displayOnClick, setDisplayOnClick] = useState(false);
  const dispatch = useDispatch();
  const { allTickets, allUser } = useSelector((state) => state.DataReducer);
  const [groupValue, setGroupValue] = useState(getGroup());
  const [orderValue, setOrderValue] = useState(getOrder());

  const handleValueChange = (e, isGroupValue) => {
    // Update the selected value and save it in localStorage
    if (isGroupValue) {
      setGroupValue(e.target.value);
      localStorage.setItem("group", e.target.value);
    } else {
      setOrderValue(e.target.value);
      localStorage.setItem("order", e.target.value);
    }

    // Trigger data selection with the updated values
    if (groupValue === "user") {
      dispatch(selectData(groupValue, { allTickets, allUser }, orderValue));
    } else {
      dispatch(selectData(groupValue, allTickets, orderValue));
    }
  };

  useEffect(() => {
    // Update displayed data based on the selected options
    if (groupValue === "user") {
      dispatch(selectData(groupValue, { allTickets, allUser }, orderValue));
    } else {
      dispatch(selectData(groupValue, allTickets, orderValue));
    }
  }, [allTickets, dispatch, groupValue, allUser, orderValue]);

  return (
    <div className="top-header">
      <div className="display-button">
        <button
          className="button-style"
          onClick={() => setDisplayOnClick(!displayOnClick)}
        >
          <BsSliders2 /> Display <AiOutlineDown className="dropDownIcon" />
        </button>
        {displayOnClick && (
          <>
            <div className="drop-on-click">
              <div className="select-group">
                <span>Grouping</span>
                <select
                  value={groupValue}
                  onChange={(e) => handleValueChange(e, true)}
                  className="select-style"
                  name="group"
                  id="group"
                >
                  <option value="status">Status</option>
                  <option value="user">User</option>
                  <option value="priority">Priority</option>
                </select>
              </div>
              <div className="select-group">
                <span>Ordering</span>
                <select
                  value={orderValue}
                  onChange={(e) => handleValueChange(e, false)}
                  className="select-style"
                  name="order"
                  id="order"
                >
                  <option value="priority">Priority</option>
                  <option value="title">Title</option>
                </select>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TopNav;
