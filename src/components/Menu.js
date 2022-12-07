import React from "react";
import "../styles/Menu.css";

const Menu = ({ info }) => {
  const answer = info;
  console.log(answer);
  return (
    <div className="container">
      <h1>Menu</h1>
      {answer.map((val) => {
        return (
          <div className="itemWrap">
            <div className="itemNameWrap">
              <span className="itemName">{val.name}</span>
              <span className="itemMiddle"></span>
              <span className="itemPrice">8</span>
            </div>
            <span className="itemDesc">{val.details}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
