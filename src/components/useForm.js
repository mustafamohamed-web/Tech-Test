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

  const handleRequest = async (e) => {
    e.preventDefault();
    if (values) {
      await addDoc(collection(db, "firebase-test"), {
        person: values.person,
        email: values.email,
        company: values.company,
        message: values.message,
      });
      setValues("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
  };

  return {
    handleChange,
    values,
    errors,
    handleSubmit,
    handleRequest,
  };
};

export default useForm;
