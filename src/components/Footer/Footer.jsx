import { AiOutlineMail } from "react-icons/ai";
import "./footer.scss";

const Footer = () => {
  return (
    <section className="footer">
      <h1>Subscribe to Our NewsLetter</h1>
      <div className="input">
        <AiOutlineMail className="icon" />
        <input type="email" placeholder="your email" />
        <button>Subscribe</button>
      </div>
      <p>© All rights reserved. Made with by MadrasThemes</p>
    </section>
  );
};

export default Footer;
