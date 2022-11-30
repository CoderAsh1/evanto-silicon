import "./hero.scss";
import { AiOutlineDown } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
const Hero = () => {
  let [transform, setTransform] = useState(1);

  let imgRef = useRef(null);
  let img2Ref = useRef(null);

  window.onscroll = () => {
    setTransform((prev) => (prev + document.documentElement.scrollTop) / 30);
  };

  useEffect(() => {
    imgRef.current.style.translate = `0 -${transform}rem`;
    img2Ref.current.style.translate = `0 +${transform / 2}rem`;
  }, [document.documentElement.scrollTop]);

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
          ref={imgRef}
          src="https://silicon.madrasthemes.com/wp-content/uploads/2022/01/screens01.png"
          alt="middleImg"
          width="100%"
        />
      </div>
      <div className="right">
        <img
          ref={img2Ref}
          src="https://silicon.madrasthemes.com/wp-content/uploads/2022/01/screens02.png"
          alt="right"
          width="100%"
        />
      </div>
    </section>
  );
};

export default Hero;
