import "./feature.scss";
import one from "../../assets/1.svg";
import two from "../../assets/2.svg";
import three from "../../assets/3.svg";
import four from "../../assets/4.svg";

const Feature = () => {
  return (
    <div className="feature">
      <div>
        <img src={one} alt="one" />
        <h4>Light/Dark Mode</h4>
      </div>
      <div>
        <img src={two} alt="two" />
        <h4>Figma Files Included</h4>
      </div>
      <div>
        <img src={three} alt="three" />
        <h4>100+ UI Flexible Sections</h4>
      </div>
      <div>
        <img src={four} alt="four" />
        <h4>Free Lifetime Updates</h4>
      </div>
    </div>
  );
};

export default Feature;
