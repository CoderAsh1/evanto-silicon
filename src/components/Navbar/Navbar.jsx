import "./navbar.scss";
import moon from "../../assets/moon.png";
import { AiOutlineDown, AiOutlineShoppingCart } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { SlMenu } from "react-icons/sl";

const Navbar = () => {
  return (
    <section className="navbar">
      <div className="logo">
        <img
          src="https://silicon.madrasthemes.com/wp-content/uploads/2022/01/logo.svg"
          alt="logo"
          width="47px"
        />
        <h1>Silicon</h1>
      </div>
      <div className="nav-btns">
        <ul>
          <li>
            Landings <AiOutlineDown style={{ fontSize: "12px" }} />
          </li>
          <li>
            Pages <AiOutlineDown style={{ fontSize: "12px" }} />
          </li>
          <li>
            Portfolio <AiOutlineDown style={{ fontSize: "12px" }} />
          </li>
          <li>Portfolio</li>
          <li>Docs</li>
        </ul>
      </div>
      <div className="right">
        <div className="mode">
          <span>Light</span>
          <div className="toggle-btn">
            <FaMoon className="moon" />
          </div>
          <span>Dark</span>
        </div>
        <button>
          <AiOutlineShoppingCart />
          Buy now
        </button>
        <SlMenu className="menu" />
      </div>
    </section>
  );
};

export default Navbar;
