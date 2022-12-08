import React, { useState } from "react";
import "../styles/Form.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  return (
    <form className="form">
      <h1>Contact Form</h1>

      <label htmlFor=""></label>
      <input
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor=""></label>
      <input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor=""></label>
      <input
        placeholder="company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <label htmlFor=""></label>
      <textarea
        placeholder="message"
        onChange={(e) => setMessage(e.target.value)}
      />
    </form>
  );
};

export default Form;
