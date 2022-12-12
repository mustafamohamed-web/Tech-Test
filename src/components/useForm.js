import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../Firebase";

const useForm = (validate) => {
  const [values, setValues] = useState({
    person: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const userCollectionRef = collection(db, "Tech-test");

  const handleRequest = (e) => {
    e.preventDefault();
    addDoc(userCollectionRef, {
      person: values.person,
      email: values.email,
      compnay: values.company,
      message: values.message,
    });
    // ifalert("Form submitted");
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   handleRequest();
  //   setErrors(validate(values));
  // };
  return { handleChange, values, handleRequest, errors };
};

export default useForm;
