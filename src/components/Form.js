import React, { useState } from "react";
import "../styles/Form.css";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../Firebase";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const userCollectionRef = collection(db, "Tech-test");

  const handleSubmit = (e) => {
    e.preventDefualt();
    addDoc(userCollectionRef, {
      name: name,
      email: email,
      compnay: company,
      message: message,
    })
      .then(() => {
        alert("Form has been submitted");
      })
      .catch((err) => {
        console.log(err);
      });
    setName("");
    setEmail("");
    setCompany("");
    setMessage("");
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
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
      <button>Submit</button>
    </form>
  );
};

export default Form;
