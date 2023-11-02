import React from 'react';
import { FaCircle } from 'react-icons/fa';
import { BsExclamationSquareFill } from 'react-icons/bs';
import './Card.css';

// Card component that displays information
const Card = ({ id, title, tag, status }) => {
  return (
    <div className="cardContainer flex-gap-10" style={{ gap: '5px' }}>
      <div className="cardHeading flex-sb">
        <span className='color-grey' style={{ textTransform: "uppercase" }}>{id}</span>
        <div className="imageContainer relative" style={{ width: "30px", height: "30px" }}>
          <img
            style={{ width: "100%", height: "100%", borderRadius: "50%" }}
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="UserImage"
          />
          <div className="showStatus"></div>
        </div>
      </div>
      <div className="cardTitle" style={{ fontWeight: "normal" }}>
        <p>{title}</p>
      </div>
      <div className="cardTags">
        <div className="tags color-grey"> <BsExclamationSquareFill /> </div>
        {
          tag?.map((elem, index) => (
            <div key={index} className="tags color-grey"> <FaCircle className='circle' /> {elem}</div>
          )
          )
        }
      </div>
    </div>
  );
}

export default Card;
