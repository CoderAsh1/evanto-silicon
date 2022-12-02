import "./feature.scss";
import "swiper/css";
import "swiper/swiper-bundle.css";
import one from "../../assets/1.svg";
import two from "../../assets/2.svg";
import three from "../../assets/3.svg";
import four from "../../assets/4.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import { useEffect, useState } from "react";

const Feature = () => {
  SwiperCore.use([Autoplay]);
  const [width, setWidth] = useState(getWindowDimensions());
  const [gap, setGap] = useState(0);
  const [slidePerPage, setSlidePerPage] = useState(1);

  function getWindowDimensions() {
    const { innerWidth: width } = window;

    return width;
  }

  function handleSlider() {
    let width = getWindowDimensions();
    if (width > 1000) {
      setSlidePerPage(4);
      setGap(50);
    } else if (width < 1000 && width > 601) {
      setSlidePerPage(3);
      setGap(30);
    } else if (width < 600 && width > 401) {
      setSlidePerPage(2);
      setGap(20);
    } else if (width < 400) {
      setSlidePerPage(1);
      setGap(0);
    }
  }

  useEffect(() => {
    function handleResize() {
      setWidth(getWindowDimensions());
      handleSlider();
    }

    handleSlider();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [gap, slidePerPage]);

  return (
    <section className="feature">
      <Swiper
        spaceBetween={gap}
        loop={width < 1000 ? true : false}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        slidesPerView={slidePerPage}
      >
        <SwiperSlide className="slide">
          <img src={one} alt="one" />
          <h4>Light/Dark Mode</h4>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={two} alt="two" />
          <h4>Figma Files Included</h4>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={three} alt="three" />
          <h4>100+ UI Flexible Sections</h4>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={four} alt="four" />
          <h4>Free Lifetime Updates</h4>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Feature;
