import "./index.scss";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <div className="footer">
      <div className="mailto">
        <a href="mailto:email@example.com">
          <HiOutlineMail /> sam@ldnsportsocial.com
        </a>
      </div>
      <div className="address">
        <p>LDN Sport Social Limited</p>
        <p>Registered Company No. 14487021</p>
        <p>Unit 1, Kennet House, Enterprise Way, London SW18 1GF</p>
      </div>
      <div class="terms">
        <a
          target="_blank"
          className="terms-btn"
          href="https://irp.cdn-website.com/f376d527/files/uploaded/LDN%20Sport%20Social%20Terms%20and%20Conditions.pdf"
        >
          Terms & Conditions
        </a>
      </div>
    </div>
  );
};

export default Footer;
