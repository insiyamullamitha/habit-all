import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";

import DismissableAlert from "../components/DismissableAlert";

export default function Contact() {
  const form = useRef();
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

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
          setShowAlert(true);
          setAlertMessage("Message sent successfully!");
        },
        (error) => {
          setShowAlert(true);
          setAlertMessage("Message failed to send. Please try again.");
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
            <FontAwesomeIcon
              style={{ top: "50%" }}
              className="icon"
              icon={faMessage}
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div>
        {showAlert && (
          <DismissableAlert
            message={alertMessage}
            onClose={() => setShowAlert(false)}
            backgroundColor={
              alertMessage === "Message sent successfully!"
                ? "#98fb98"
                : "#ffcc80"
            }
          />
        )}
      </div>
    </>
  );
}
