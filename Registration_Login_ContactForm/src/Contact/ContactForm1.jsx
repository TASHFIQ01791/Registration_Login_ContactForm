import { ContactFormDesign } from "./ContactFormDesign";

export const ContactForm1 = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <ContactFormDesign handleOnSubmit={handleOnSubmit} />
    </div>
  );
};
