import React from "react";
import "../styles/Form.css";

const Form = () => {
  return (
    <form className="form">
      <h1>Contact Form</h1>

      <label htmlFor="">Name</label>
      <input placeholder="name" />

      <label htmlFor="">Email</label>
      <input placeholder="email" />

      <label htmlFor="">Company</label>
      <input placeholder="name" />

      <label htmlFor="">Enqiry</label>
      <input placeholder="name" />
    </form>
  );
};

export default Form;
