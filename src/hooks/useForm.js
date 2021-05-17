import { useState } from "react"

export const useForm = (initialValues) => {
  const [ values, setValues ] = useState(initialValues);
  const [ showSuccessMessage, setShowSuccessMessage ] = useState ( false );

  const handleChanges = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  };

  const handleSubmit = event => {
    event.preventDefault();
    setShowSuccessMessage(true);
  }

  return { values, handleChanges, handleSubmit, showSuccessMessage }

}