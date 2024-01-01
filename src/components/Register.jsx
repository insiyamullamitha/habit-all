import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="wrapper">
      <form action="">
        <div className="input-box">
          <input type="text" placeholder="Your Name" required />
          <FontAwesomeIcon className="icon" icon={faUser} />
        </div>
        <div className="input-box">
          <input type="email" placeholder="Your Email" required />
          <FontAwesomeIcon className="icon" icon={faEnvelope} />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Your Password" required />
          <FontAwesomeIcon className="icon" icon={faKey} />
        </div>
        <button type="submit">Register</button>
      </form>
      <div className="register-link">
        <p>
          Already have an account?{" "}
          <Link to="/login" key="Log In">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
