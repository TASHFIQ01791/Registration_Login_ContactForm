import { useState } from "react";
import "./Registration.css";
import { RegistrationDesign } from "./RegistrationDesign";

export const RegistrationForm2 = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(user);
  };
  return (
    <RegistrationDesign
      handleInputChange={handleInputChange}
      handleOnSubmit={handleOnSubmit}
      user={user}
    />
  );
};
