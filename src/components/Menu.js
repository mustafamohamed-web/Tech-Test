import React from "react";
import "../styles/Menu.css";

const Menu = ({ info }) => {
  return (
    <div className="wrapper">
      <div className="title">
        <h4>
          <span>fresh food for good health</span>our menu
        </h4>
      </div>
      <div className="menu">
        {info.map((val) => {
          const { image, details, name, prices } = val;
          return (
            <div className="single-menu">
              <img src={image} />
              <div className="menu-content">
                <h4>
                  {name}
                  <span>£{prices.price.price}</span>
                </h4>
                <p>{details}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
