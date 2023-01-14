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
    <div className="contact">
      <div className="get-in-touch">
        <h1 className="title">Contact Us</h1>
        <form className="contact-form row" ref={refForm} onSubmit={sendEmail}>
          <div className="form-field col x-100">
            <input
              className="input-text js-input"
              placeholder="Name"
              type="text"
              name="name"
              required
            />
          </div>
          <div className="form-field col x-50">
            <input
              className="input-text js-input"
              placeholder="Email"
              type="email"
              name="email"
              required
            />
          </div>
          <div className="form-field col x-50">
            <input
              className="input-text js-input"
              placeholder="Phone"
              type="text"
              name="subject"
              required
            />
          </div>
          <div className="form-field col x-100">
            <input
              className="input-text js-input"
              placeholder="Message"
              name="message"
              required
            ></input>
          </div>
          <div class="form-field col x-100 align-center">
            <input type="submit" className="submit-btn" value="Send Message" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
