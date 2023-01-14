import logo from "../../assets/images/ldnsportlogo.webp";
import "./index.scss";

const Landing = () => {
  return (
    <div className="landing">
      <img className="landing-logo" src={logo} alt="logo"></img>
    </div>
  );
};

export default Landing;
