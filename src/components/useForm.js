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
  // const userCollectionRef = collection(db, "Tech-test");

  // const handleRequest = () => {
  //   addDoc(userCollectionRef, {
  //     name: values.person,
  //     email: values.email,
  //     company: values.company,
  //     message: values.message,
  //   });

  //   setValues("");
  // };

  // const messagae = () => {
  //   setTimeout(() => {
  //     person.value = '',
  //       email.value = '',
  //       company.value = '',
  //       message.value = '',

  //   },2000)
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    alert("form has been submitted");
    // handleRequest();
  };
  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
