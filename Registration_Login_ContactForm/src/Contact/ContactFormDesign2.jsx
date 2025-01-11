import { useState } from "react";
import "../Login/LoginForm.css";
// import "../Registration/Registration.css";

export const ContactFormDesign2 = ({ handleOnSubmit }) => {
  //   const [userName, setUserName] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [message, setMessage] = useState("");
  const [contact, setContact] = useState({
    userName: "",
    password: "",
    message: "",
  });

  const handleContact = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <form onSubmit={handleOnSubmit} className="parent">
      <div className="container">
        <div>
          <h1>Contact Form </h1>
        </div>

        {/* label and input for Email  */}
        <label htmlFor="userName">
          <b>Username: {contact.userName} </b>
        </label>
        <input
          type="text"
          placeholder="Enter User Name: "
          name="userName"
          autoComplete="off"
          required
          value={contact.userName}
          onChange={handleContact}
        />
        {/* label and input for Password  */}
        <label htmlFor="password">
          <b>password: {contact.password} </b>
        </label>
        <input
          type="password"
          name="password"
          autoComplete="off"
          required
          value={contact.password}
          onChange={handleContact}
        />

        {/* Comment here  */}
        <label htmlFor="message">
          <b>Message:{contact.message}</b>
        </label>
        <textarea
          name="message"
          rows={8}
          cols={8}
          style={{ resize: "none" }}
          value={contact.message}
          onChange={handleContact}
        ></textarea>

        {/* Submit the form  */}
        <button type="submit">Send Message</button>
      </div>
    </form>
  );
};
