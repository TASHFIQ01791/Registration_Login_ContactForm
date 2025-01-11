import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ContactForm2 } from "./Contact/ContactForm2";
// import { ContactForm1 } from "./Contact/ContactForm1";
import { LoginForm } from "./Login/LoginForm";
import { RegistrationForm2 } from "./Registration/RegistrationForm2";
// import { RegistrationForm1 } from "./Registration/RegistrationForm1";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <RegistrationForm1/> */}
    <RegistrationForm2 />
    <LoginForm />
    {/* <ContactForm1/> */}
    <ContactForm2/>
  </StrictMode>
);
