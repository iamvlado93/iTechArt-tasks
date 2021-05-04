import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './index.css';

export default function RegistrationForm () {

  const [values, setValues] = useState({
    firstName: '',
    email: '',
    phone: '',
    password: '',
  })

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(values.firstName && values.email && values.phone && values.password) {
      setValid(true)
      console.log('Запрос отправлен', 'Имя: ' + values.firstName, 'Почта: ' + values.email, 'Телефон: ' + values.phone, 'Пароль: ' + values.password)
      history.push("/profile")
    }
    setSubmitted(true);
  }

  const handleFirstNameInputChange = ({target}) => {setValues({...values, firstName: target.value})};
  const handleEmailInputChange = (event) => {setValues({...values, email: event.target.value})};
  const handlePhoneInputChange = (event) => {setValues({...values, phone: event.target.value})};
  const handlePasswordInputChange = (event) => {setValues({...values, password: event.target.value})};

  const history = useHistory();
  
  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <input
          onChange={handleFirstNameInputChange}
          value={values.firstName}
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"/>
          {submitted && !values.firstName? <span>Please enter your name</span> : null}

        <input
          onChange={handleEmailInputChange}
          value={values.email}
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"/>
          {submitted && !values.email? <span>Please enter your email</span> : null}
          
        <input
          onChange={handlePhoneInputChange}
          value={values.phone}
          id="phone"
          className="form-field"
          type="text"
          placeholder="Phone number"
          name="phone"/>
          {submitted && !values.phone? <span>Please enter your phone number</span> : null}
          
        <input
          onChange={handlePasswordInputChange}
          value={values.password}
          id="password"
          className="form-field"
          type="password"
          placeholder="Password"
          name="password"/>
          {submitted && !values.password? <span>Please enter your password</span> : null}
          
          {submitted && valid && values.firstName && values.phone && values.email && values.password ? (
          <button onClick={() => {history.push("/profile")}} className="button-submit" type="submit">Register</button>
          ) : (
          <button className='button-submit' type="submit">Register</button> )}
      </form>
    </div>
  );
}
    