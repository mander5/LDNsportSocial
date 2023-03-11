import "./index.scss";
import logo from "../../assets/images/logo.jpg";

const Navbar = () => {
  return (
    <div className="navigation">
      <img className="navigation-logo" src={logo} alt="logo"></img>
      <div className="navigation-links">
        <a href="google.com">About</a>
        <a href="google.com">Contact</a>
        <a href="google.com">Services</a>
      </div>
      <div className="navigation-footer">
        <div className="navigation-footer-links">
          <link
            rel="icon"
            href="https://www.instagram.com/static/images/ico/favicon-192.png/68d99ba29cc8.png"
          />
          <link rel="icon" href="https://www.facebook.com/favicon.ico" />
          <img
            src="https://www.instagram.com/static/images/ico/favicon-192.png/68d99ba29cc8.png"
            alt="Instagram"
          />
          <img src="https://www.facebook.com/favicon.ico" alt="Facebook" />
        </div>
        <p>LDN Sport Social Limited</p>
        <p>Registered Company No. 14487021</p>
        <p>Unit 1, Kennet House, Enterprise Way</p>
        <p>London SW18 1GF</p>
      </div>
    </div>
  );
};

export default Navbar;
