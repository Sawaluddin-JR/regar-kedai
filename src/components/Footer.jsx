import { AiFillInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <AiFillInstagram /> <AiOutlineWhatsApp />
      </div>
      <p>&copy; 2023 regarkedai.com</p>
    </div>
  );
};

export default Footer;
