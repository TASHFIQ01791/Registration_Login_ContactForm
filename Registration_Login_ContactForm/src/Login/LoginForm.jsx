import "./LoginForm.css";
import { LoginFormDesign } from "./LoginFormDesign";

export const LoginForm = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <LoginFormDesign
      handleOnSubmit={handleOnSubmit}
    />
  );
};
