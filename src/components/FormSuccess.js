import React from "react";
import Image from "../assests/success.png";

const FormSuccess = () => {
  return (
    <div className="form-success">
      <p>Message has been successfully sent</p>
      <img src={Image} className="form-img" />
    </div>
  );
};

export default FormSuccess;
