import "./index.scss";
import logo from "../../assets/images/logo.jpg";

const NavbarMobile = () => {
  return (
    <div className="navigation-m">
      <img className="navigation-logo-m" src={logo} alt="logo"></img>
      <div className="navigation-links-m">
        <a href="google.com">About</a>
        <a href="google.com">Contact</a>
        <a href="google.com">Services</a>
      </div>
    </div>
  );
};

export default NavbarMobile;
