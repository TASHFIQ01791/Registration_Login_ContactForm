import { ContactFormDesign2 } from "./ContactFormDesign2";

export const ContactForm2 = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <ContactFormDesign2 handleOnSubmit={handleOnSubmit} />
    </div>
  );
};
