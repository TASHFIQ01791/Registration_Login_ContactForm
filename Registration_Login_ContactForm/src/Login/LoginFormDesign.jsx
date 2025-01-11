import { useState } from "react";

export const LoginFormDesign = ({ handleOnSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form onSubmit={handleOnSubmit} className="parent">
      <div className="container">
        <div>
          <h1>Login </h1>
          <p>Kindly fill in this form to register.</p>
        </div>

        {/* label and input for Email  */}
        <label htmlFor="email">
          <b>Email:{email} </b>
        </label>
        <input
          type="email"
          placeholder="example@gmail.com"
          name="email"
          autoComplete="off"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Submit the form  */}
        <button type="submit">Register</button>

        {/* if already have login  */}
        <div>
          <p>
            Don't have an account? <a href="#">Register</a>.
          </p>
        </div>
      </div>
    </form>
  );
};
