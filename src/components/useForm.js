import { useEffect, useState } from "react";

// import { addDoc, collection } from "firebase/firestore";
// import { db } from "../Firebase";

const useForm = (validate, callback) => {
  const [values, setValues] = useState({
    person: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  // const handleRequest = async (e) => {
  //   e.preventDefault();
  //   if (values) {
  //     await addDoc(collection(db, "tech-test"), {
  //       person: values.person,
  //       email: values.email,
  //       company: values.company,
  //       message: values.message,
  //     });
  //     setValues("");
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   let validationErrors = validate(values);
  //   if (validationErrors) {
  //     setErrors(validationErrors);
  //   } else {
  //     setErrors(null);

  //     await addDoc(collection(db, "tech-test"), {
  //       person: values.person,
  //       email: values.email,
  //       company: values.company,
  //       message: values.message,
  //     });

  //     setValues("");
  //   }
  // };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
