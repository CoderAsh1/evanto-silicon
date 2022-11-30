import { useEffect, useRef } from "react";
import { FaAngleUp } from "react-icons/fa";
import "./App.scss";
import {
  Feature,
  Footer,
  Hero,
  Landing,
  MoreFeature,
  Navbar,
} from "./components";

function App() {
  let topRef = useRef();

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.onscroll = () => {
      if (document.documentElement.scrollTop > 240) {
        topRef.current.style.display = "block";
      } else {
        topRef.current.style.display = "none";
      }
    };
  }, []);
  const landingRef = useRef();

  function handleBackClick() {
    landingRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="App">
      <Navbar />
      <div className="components">
        <Hero />
        <Feature />
        <Landing ref={landingRef} onBackClick={handleBackClick} />
        <MoreFeature />
        <Footer />

        <div ref={topRef} className="back-to-top" onClick={goToTop}>
          <FaAngleUp className="arrow" />
        </div>
      </div>
    </div>
  );
}

export default App;
