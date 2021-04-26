import React from 'react';
import {} from './registration-form.css'

const user = {
  phone: "",
  name: "",
  email: "",
  password: "",
  correctPassword: "",
};

class SignUpFormComponent extends React.Component {

  state = user;

  changePhone = event => {this.setState( {phone: event.target.value} )};
  changeName = event => {this.setState( {name: event.target.value} )};
  changeEmail = event => {this.setState( {email: event.target.value} )};
  changePassword = event => {this.setState( {password: event.target.value} )};
  changeCorrectPassword = event => {this.setState( {correctPassword: event.target.value} )};

  
  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid === true) {
      console.log('Запрос отправлен', this.state);
      this.setState(user);
      this.setState({phoneError: '', nameError: '', emailError: '', passwordError: '', correctPasswordError: ''})
    }
  };

  validate = () => {
    let phoneError = "";
    let nameError = "";
    let emailError= "";
    let passwordError= "";
    let correctPasswordError= "";

    if (this.state.phone.length !== 10 || this.state.phone[0] !== '+') {
      phoneError = "Phone number should start with '+' and contain 9 digits";
    }
    
    if (!this.state.name) {
      nameError = "Name cannot be blank";
    }

    if (!this.state.email.includes("@")) {
      emailError = "Invalid email, should contain '@'";
    }

    if (this.state.password.length < 6) {
      passwordError = "Password should be more than 6 characters";
    }

    if (this.state.password !== this.state.correctPassword) {
      correctPasswordError = "Your password does not match";
    }

    if (phoneError || nameError || emailError || passwordError || correctPasswordError) {
      this.setState({ phoneError, nameError, emailError, passwordError, correctPasswordError });
      return false;
    }
    return true;
  };

  render() {
    return (
      <form className='form' onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={this.state.phone}
            onChange={this.changePhone}
          />
          <div className='error' style={{ fontSize: 12, color: "red" }}>
            {this.state.phoneError}
          </div>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={this.state.name}
            onChange={this.changeName}
          />
          <div className='error' style={{ fontSize: 12, color: "red" }}>
            {this.state.nameError}
          </div>
          <input
            type="text"
            name="email"
            placeholder="E-mail"
            value={this.state.email}
            onChange={this.changeEmail}
          />
          <div className='error' style={{ fontSize: 12, color: "red" }}>
            {this.state.emailError}
          </div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.changePassword}
          />
          <div className='error' style={{ fontSize: 12, color: "red" }}>
            {this.state.passwordError}
          </div>
          <input
            type="password"
            name="password"
            placeholder="Confirm Password"
            value={this.state.correctPassword}
            onChange={this.changeCorrectPassword}
          />
          <div className='error' style={{ fontSize: 12, color: "red" }}>
            {this.state.correctPasswordError}
          </div>
          <button type="submit">Sign Up</button>
      </form>
    );
  }
}

export default SignUpFormComponent;