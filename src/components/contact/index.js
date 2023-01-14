import "./index.scss";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const refForm = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fjm1ccs",
        "template_azcpi2l",
        e.target,
        "K0ve1VfzRNBwmw_1R"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };
  return (
    <div>
      <form ref={refForm} onSubmit={sendEmail}>
        <ul>
          <li className="half">
            <input placeholder="Name" type="text" name="name" required />
          </li>
          <li className="half">
            <input placeholder="Email" type="email" name="email" required />
          </li>
          <li>
            <input placeholder="Phone" type="text" name="subject" required />
          </li>
          <li>
            <textarea placeholder="Message" name="message" required></textarea>
          </li>
          <li>
            <input type="submit" className="flat-button" value="SEND" />
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Contact;
