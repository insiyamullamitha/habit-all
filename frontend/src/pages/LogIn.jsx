import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function LogIn() {
  return (
    <div className="wrapper">
      <form action="">
        <div className="input-box">
          <input type="email" placeholder="Your Email" required />
          <FontAwesomeIcon className="icon" icon={faUser} />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Your Password" required />
          <FontAwesomeIcon className="icon" icon={faKey} />
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="register-link">
        <p>
          Don't have an account?{" "}
          <Link to="/register" key="Register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
