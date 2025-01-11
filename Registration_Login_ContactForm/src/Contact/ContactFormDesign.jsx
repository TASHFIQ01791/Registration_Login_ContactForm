import { useState } from "react";
import "../Login/LoginForm.css";
// import "../Registration/Registration.css";

export const ContactFormDesign = ({ handleOnSubmit }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  return (
    <form onSubmit={handleOnSubmit} className="parent">
      <div className="container">
        <div>
          <h1>Contact Form </h1>
        </div>

        {/* label and input for Email  */}
        <label htmlFor="userName">
          <b>Username: {userName} </b>
        </label>
        <input
          type="text"
          placeholder="Enter User Name: "
          name="userName"
          autoComplete="off"
          required
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        {/* label and input for Password  */}
        <label htmlFor="password">
          <b>password: {password} </b>
        </label>
        <input
          type="password"
          name="password"
          autoComplete="off"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Comment here  */}
        <label htmlFor="message">
          <b>Message:{message}</b>
        </label>
        <textarea
          name="message"
          rows={8} 
          cols={8}
          style={{ resize: "none" }}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        {/* Submit the form  */}
        <button type="submit">Send Message</button>
      </div>
    </form>
  );
};
