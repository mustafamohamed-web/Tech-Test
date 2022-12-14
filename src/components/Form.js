import React, { useState } from "react";
import FormSignUp from "./FormSignUp";
import FormSuccess from "./FormSuccess";

const Form = () => {
  const [submit, setSubmit] = useState(false);

  const submitForm = (e) => {
    setSubmit(true);
  };
  return (
    <div>
      {!submit ? <FormSignUp submitForm={submitForm} /> : <FormSuccess />}
    </div>
  );
};

export default Form;
