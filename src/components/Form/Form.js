import React, { useState } from 'react'
import SignUp from '../SignUp'

const Form = () => {
  const [isSubmitted, setisSubmitted] = useState(false);

  function submitForm() {
    setisSubmitted(true);
  }
  return (
    <div>
      <SignUp/>
      {!isSubmitted ? (<SignUp submitForm={submitForm}/>) : ''}
    </div>
  )
}

export default Form
