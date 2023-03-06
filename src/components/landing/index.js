import "./index.scss";
import underline from "./underline.svg";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-intro">
        <div>
          We aim to offer new and innovative{" "}
          <p id="underlined">
            opportunities{" "}
            <img id="underline" src={underline} alt="underline-alt"></img>
          </p>
          to keep your brand ahead of the game
        </div>
      </div>
    </div>
  );
};

export default Landing;
