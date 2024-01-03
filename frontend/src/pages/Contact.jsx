import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a8zrzyl",
        "template_94f1622",
        form.current,
        "Rh1M7EhhwAHP60To-"
      )
      .then(
        (result) => {
          form.current.reset();
          alert("Your message has been sent!");
        },
        (error) => {
          alert("Something went wrong, please try again!");
        }
      );
  };
  return (
    <>
      <div className="wrapper">
        <form ref={form} onSubmit={sendEmail}>
          <div className="input-box">
            <input
              type="text"
              placeholder="Your name"
              name="from_name"
              required
            />
            <FontAwesomeIcon className="icon" icon={faUser} />
          </div>
          <div className="input-box">
            <input
              type="email"
              placeholder="Your email"
              name="from_email"
              required
            />
            <FontAwesomeIcon className="icon" icon={faEnvelope} />
          </div>
          <div className="input-box text-area">
            <textarea
              placeholder="Your message"
              name="message"
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </>
  );
}
