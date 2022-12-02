import "./navbar.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaMoon, FaAngleDown } from "react-icons/fa";
import { SlClose, SlMenu } from "react-icons/sl";
import { useState } from "react";

const Navbar = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  window.addEventListener("click", () => setIsMobileView(false));

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
            Landings <FaAngleDown style={{ fontSize: "12px" }} />
          </li>
          <li>
            Pages <FaAngleDown style={{ fontSize: "12px" }} />
          </li>
          <li>
            Portfolio <FaAngleDown style={{ fontSize: "12px" }} />
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
        <SlMenu
          className="menu"
          onClick={(e) => {
            e.stopPropagation();
            setIsMobileView(!isMobileView);
          }}
          style={{ display: isMobileView && "none" }}
        />
        <SlClose
          className="menu"
          onClick={() => setIsMobileView(!isMobileView)}
          style={{ display: !isMobileView && "none" }}
        />
      </div>
      <div
        className="mobile-menu"
        style={{ width: isMobileView && "200px" }}
        // onClick={(e) => e.stopPropagation()}
      >
        <div className="mobile-nav">
          <ul>
            <li>
              Landings <FaAngleDown style={{ fontSize: "12px" }} />
            </li>
            <li>
              Pages <FaAngleDown style={{ fontSize: "12px" }} />
            </li>
            <li>
              Portfolio <FaAngleDown style={{ fontSize: "12px" }} />
            </li>
            <li>Portfolio</li>
            <li>Docs</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
