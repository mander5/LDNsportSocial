import logo from "../../assets/images/ldnsportlogo.webp";
import "./index.scss";

const Landing = () => {
  return (
    <div className="landing">
      <img className="landing-logo" src={logo} alt="logo"></img>
      <div></div>
    </div>
  );
};

export default Landing;
