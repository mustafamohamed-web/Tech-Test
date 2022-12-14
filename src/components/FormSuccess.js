import React from "react";
import Image from "../assests/validate2.png";
import "../styles/FormSuccess.css";

const FormSuccess = () => {
  return (
    <div className="form-success">
      <img src={Image} className="form-img" />
    </div>
  );
};

export default FormSuccess;
