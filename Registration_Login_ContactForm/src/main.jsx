import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RegistrationForm2 } from "./Registration/RegistrationForm2";
// import { RegistrationForm1 } from "./Registration/RegistrationForm1";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <RegistrationForm1/> */}
    <RegistrationForm2 />
  </StrictMode>
);
