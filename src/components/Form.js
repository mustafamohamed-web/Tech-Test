import React from "react";
import "../styles/Form.css";
import Validate from "./validate";
import useForm from "./useForm";

const Form = () => {
  const { handleChange, handleRequest, values, errors, handleSubmit } =
    useForm(Validate);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Contact Form</h1>

      <label className="form-label"></label>
      <input
        type="text"
        name="person"
        placeholder="name"
        value={values.person}
        onChange={handleChange}
      />

      {errors.person && <p>{errors.person}</p>}

      <label className="form-label"></label>
      <input
        type="email"
        name="email"
        placeholder="email"
        value={values.email}
        onChange={handleChange}
      />
      {errors.email && <p>{errors.email}</p>}

      <label className="form-label"></label>
      <input
        className="form-input"
        type="text"
        name="company"
        placeholder="company"
        value={values.company}
        onChange={handleChange}
      />
      {errors.company && <p>{errors.company}</p>}

      <label className="form-label"></label>
      <textarea
        type="text"
        name="message"
        placeholder="message"
        value={values.message}
        onChange={handleChange}
      />
      {errors.message && <p>{errors.message}</p>}
      <button type="submit" onClick={handleRequest}>
        Submit!
      </button>
    </form>
  );
};

export default Form;
