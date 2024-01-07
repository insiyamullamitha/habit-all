export default function Footer() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <div id="footer" className="footer container">
        <div className="footer-section">
          <p className="title">Hab-It All</p>
          <p>
            Hab-It All is a place where you can track your habits and learn to
            lead a more balanced lifestyle. This service is completely free.
          </p>
          <p>&copy;2023 | All Rights Reserved</p>
        </div>
        <div className="footer-section">
          <p className="title">Contact Us</p>
          <a href="mailto:habitall.im@gmail.com">habitall.im@gmail.com</a>
          <p>123-456-7890</p>
          <p>13 Cornelia Street UK</p>
        </div>
        <div className="footer-section">
          <p className="title">Socials</p>
          <ul style={{ listStyle: "none" }}>
            <li>
              <a
                style={{ color: "white" }}
                class="fa fa-instagram"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                &nbsp; Instagram
              </a>
            </li>
            <li>
              <a
                style={{ color: "white" }}
                href="https://www.facebook.com/"
                class="fa fa-facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                &nbsp;&nbsp; Facebook
              </a>
            </li>
            <li>
              <a
                style={{ color: "white" }}
                href="https://twitter.com/"
                class="fa fa-twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                &nbsp; Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
