import React from "react";
import { useSelector } from "react-redux";
import { BsExclamationSquareFill } from 'react-icons/bs'
import { BsThreeDots } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { BiSignal3, BiSignal2, BiSignal1 } from "react-icons/bi";

import "./DashView.css";
import Card from "../Card/Card";

// Dashboard view component
const DashView = () => {
  const { selectedData, user } = useSelector(
    (state) => state.SelectDataReducer
  );

  return (
    selectedData && (
      <div className="dashContainer" style={{ justifyContent: "space-evenly" }}>
        {selectedData.map((elem, index) => {
          const title = elem[index]?.title;
          const value = elem[index]?.value;

          return (
            <div key={index} className="dashCardContainer">
              <div className="dashCardHeading flex-sb">
                <div className="leftView">
                  {(!user && title) ? (
                    (() => {
                      switch (title) {
                        case "Urgent":
                          return <BsExclamationSquareFill className="exclamation" />;
                        case "High":
                          return <BiSignal3 className="high" />;
                        case "Medium":
                          return <BiSignal2 className="medium" />;
                        case "Low":
                          return <BiSignal1 className="medium" />;
                        default:
                          return <BsThreeDots />;
                      }
                    })()
                  ) : (
                    <div className="imageContainer relative" style={{ width: "15px", height: "15px", display: 'inline-block' }}>
                      <img
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "50%",
                        }}
                        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="UserImage"
                      />
                    </div>
                  )}
                  <span>
                    {" "}
                    {title} {value?.length}
                  </span>
                </div>
                <div className="rightView">
                  <AiOutlinePlus />{" "}
                  <BsThreeDots />
                </div>
              </div>
              <div className="dashList flex-gap-10">
                {value?.map((elem, ind) => (
                  <Card key={ind} id={elem.id} title={elem.title} tag={elem.tag} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    )
  );
};

export default DashView;
