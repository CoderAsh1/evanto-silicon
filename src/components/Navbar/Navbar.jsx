import "./navbar.scss";
import { AiOutlineDown, AiOutlineShoppingCart } from "react-icons/ai";
const Navbar = () => {
  return (
    <section className="navbar">
      <div className="logo">
        <img
          src="https://silicon.madrasthemes.com/wp-content/uploads/2022/01/logo.svg"
          alt="logo"
          width="47px"
          height="40px"
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
          <div className="toggle-btn"></div>
          <span>Dark</span>
        </div>
        <button>
          <AiOutlineShoppingCart />
          Buy now
        </button>
      </div>
    </section>
  );
};

export default Navbar;
