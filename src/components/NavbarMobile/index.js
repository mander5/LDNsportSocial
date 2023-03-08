import "./index.scss";
import logo from "../../assets/images/logo.jpg";

const NavbarMobile = () => {
  return (
    <div className="navigation-m">
      <img className="navigation-logo-m" src={logo} alt="logo"></img>
      <div className="navigation-links-m">
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Services</a>
      </div>
    </div>
  );
};

export default NavbarMobile;
