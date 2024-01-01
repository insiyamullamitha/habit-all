import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMessage, faKey } from "@fortawesome/free-solid-svg-icons";

export default function LogIn() {
  return (
    <div class="wrapper">
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
          Don't have an account? <a href="#">Register</a>
        </p>
      </div>
    </div>
  );
}
