import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  // add a copyright for year 2023, falahee.dev

  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <span onClick={() => window.open("https://github.com/MFalahee")}>
            {" "}
            <FontAwesomeIcon icon={faGithub} />{" "}
          </span>
          <span onClick={() => window.open("https://linkedin.com/in/falahee")}>
            {" "}
            <FontAwesomeIcon icon={faLinkedin} />{" "}
          </span>
        </div>
        <span className="favicon-span">
          <img src="/favicon.ico" alt="falahee.dev favicon" />
        </span>
        <div className="footer-right">
          <span className="copyright">
            © {new Date().getFullYear()} falahee.dev
          </span>
          <span> </span>
        </div>
      </div>
    </div>
  );
}
