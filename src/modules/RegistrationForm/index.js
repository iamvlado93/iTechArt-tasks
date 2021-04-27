import React, {useState} from 'react';
import './index.css';

export default function RegistrationForm () {
  
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [correctPassword, setCorrectPassword] = useState('');

  const changePhone = event => {setPhone( {phone: event.target.value} )};
  const changeName = event => {setName( {name: event.target.value} )};
  const changeEmail = event => {setEmail( {email: event.target.value} )};
  const changePassword = event => {setPassword( {password: event.target.value} )};
  const changeCorrectPassword = event => {setCorrectPassword( {correctPassword: event.target.value} )};

  
  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validate();
    if (isValid === true) {
      console.log('Запрос отправлен', phone, name, email, password, correctPassword);
      this.setState(phone, name, email, password, correctPassword);
      this.setState({phoneError: '', nameError: '', emailError: '', passwordError: '', correctPasswordError: ''})
    }
  };

  const validate = () => {
    const [phoneError, setPhoneError] = "";
    const [nameError, setNameError] = "";
    const [emailError, setEmailError] = "";
    const [passwordError, setPasswordError] = "";
    const [correctPasswordError, setCorrectPasswordError] = "";

    if (setPhone.length !== 10 || setPhone[0] !== '+') {
      setPhoneError = "Phone number should start with '+' and contain 9 digits";
    }
    
    if (!setName) {
      setNameError = "Name cannot be blank";
    }

    if (!setEmail.includes("@")) {
      setEmailError = "Invalid email, should contain '@'";
    }

    if (setPassword.length < 6) {
      setPasswordError = "Password should be more than 6 characters";
    }

    if (setCorrectPassword !== correctPassword) {
      setCorrectPasswordError = "Your password does not match";
    }

    if (phoneError || nameError || emailError || passwordError || correctPasswordError) {
      this.setState({ phoneError, nameError, emailError, passwordError, correctPasswordError });
      return false;
    }
    return true;
  };

    return (
      <form className='form' onSubmit={handleSubmit}>
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={setPhone}
            onChange={changePhone}
          />
          <div className='error' style={{ fontSize: 12, color: "red" }}>
            {this.state.phoneError}
          </div>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={setName}
            onChange={changeName}
          />
          <div className='error' style={{ fontSize: 12, color: "red" }}>
            {this.state.nameError}
          </div>
          <input
            type="text"
            name="email"
            placeholder="E-mail"
            value={setEmail}
            onChange={changeEmail}
          />
          <div className='error' style={{ fontSize: 12, color: "red" }}>
            {this.state.emailError}
          </div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={setPassword}
            onChange={changePassword}
          />
          <div className='error' style={{ fontSize: 12, color: "red" }}>
            {this.state.passwordError}
          </div>
          <input
            type="password"
            name="password"
            placeholder="Confirm Password"
            value={setCorrectPassword}
            onChange={changeCorrectPassword}
          />
          <div className='error' style={{ fontSize: 12, color: "red" }}>
            {this.state.correctPasswordError}
          </div>
          <button type="submit">Sign Up</button>
      </form>
    );
}