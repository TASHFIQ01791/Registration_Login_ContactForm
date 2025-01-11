import { useState } from "react";
import "./Registration.css";

export const RegistrationForm1 = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setlastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "passwordRepeat":
        setPasswordRepeat(value);
        break;
    }
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const name = {
      firstName,
      lastName,
      email,
      password,
      passwordRepeat,
    };
    console.log(name);
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <div className="container">
        <div>
          <h1>Register </h1>
          <p>Kindly fill in this form to register.</p>
        </div>

        {/* label and input for  firstName  */}
        <label htmlFor="firstName">
          <b>First Name: </b>
        </label>
        <input
          type="text"
          placeholder="Enter first name."
          name="firstName"
          autoComplete="off"
          required
          value={firstName}
          onChange={handleInputChange}
        />

        {/* label and input for lastName  */}
        <label htmlFor="lastName">
          <b>Last Name: </b>
        </label>
        <input
          type="text"
          placeholder="Enter first name."
          name="lastName"
          autoComplete="off"
          required
          value={lastName}
          onChange={handleInputChange}
        />
        {/* label and input for Email  */}
        <label htmlFor="email">
          <b>Email: </b>
        </label>
        <input
          type="email"
          placeholder="example@gmail.com"
          name="email"
          autoComplete="off"
          required
          value={email}
          onChange={handleInputChange}
        />
        {/* label and input for Password  */}
        <label htmlFor="password">
          <b>password: </b>
        </label>
        <input
          type="password"
          name="password"
          autoComplete="off"
          required
          value={password}
          onChange={handleInputChange}
        />

        {/* label and input for Repeat Password  */}
        <label htmlFor="passwordRepeat">
          <b>Repeat Password: </b>
        </label>
        <input
          type="password"
          name="passwordRepeat"
          autoComplete="off"
          required
          value={passwordRepeat}
          onChange={handleInputChange}
        />

        {/* Submit the form  */}
        <button type="submit">Register</button>

        {/* if already have login  */}
        <div>
          <p>
            Already have an account? <a href="#">Log in</a>.
          </p>
        </div>
      </div>
    </form>
  );
};
