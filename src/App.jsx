import { useEffect, useRef } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
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

  useEffect(() => {
    window.onscroll = () => {
      if (document.documentElement.scrollTop > 240) {
        topRef.current.style.display = "block";
      } else {
        topRef.current.style.display = "none";
      }
      // console.log(document.documentElement.scrollTop);
    };
  }, [document.documentElement.scrollTop]);

  return (
    <div className="App">
      <Navbar />
      <div className="components">
        <Hero />
        <Feature />
        <Landing />
        <MoreFeature />
        <Footer />
        <div ref={topRef} className="back-to-top">
          <AiOutlineArrowUp className="arrow" />
        </div>
      </div>
    </div>
  );
}

export default App;
