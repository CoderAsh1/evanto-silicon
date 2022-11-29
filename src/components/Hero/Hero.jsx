import "./hero.scss";
import { AiOutlineDown } from "react-icons/ai";
const Hero = () => {
  return (
    <section className="hero">
      <div className="left">
        <h1>Silicon</h1>
        <p>Multipurpose Business / Technology Template</p>
        <div>
          <img
            src="https://silicon.madrasthemes.com/wp-content/uploads/2022/01/switcher.svg"
            alt="toggle"
          />
        </div>

        <a href="#landing">
          <button>
            <AiOutlineDown />
          </button>
        </a>
        <span>View Landings</span>
      </div>
      <div className="middle">
        <img
          src="https://silicon.madrasthemes.com/wp-content/uploads/2022/01/screens01.png"
          alt="middleImg"
          width="100%"
        />
      </div>
      <div className="right">
        <img
          src="https://silicon.madrasthemes.com/wp-content/uploads/2022/01/screens02.png"
          alt="right"
          width="100%"
        />
      </div>
    </section>
  );
};

export default Hero;
