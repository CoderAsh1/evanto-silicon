import "./morefeature.scss";
import androidIcon from "../../assets/android.png";
import cssIcon from "../../assets/css.png";
import docsIcon from "../../assets/docs.png";
import touchIcon from "../../assets/doorbell.png";
import htmlIcon from "../../assets/html.png";
import jsIcon from "../../assets/js.png";

const MoreFeature = () => {
  return (
    <section className="more-feature">
      <h1>More Silicon Feature</h1>
      <div className="features">
        <div className="feature-item">
          <img src={androidIcon} alt="androidIcon" />
          <h3>Built with Bootstrap 5</h3>
          <p>
            Silicon is the powerful front-end solution based on Bootstrap 5 —
            the world’s most popular responsive, mobile-first front-end
            component library.
          </p>
        </div>
        <div className="feature-item">
          <img src={docsIcon} alt="docsIcon" />
          <h4>Detailed Documentation</h4>
          <p>
            Download package includes the documentation that covers all crucial
            information about how to get started, customize template and
            components usage.
          </p>
        </div>
        <div className="feature-item">
          <img src={androidIcon} alt="androidIcon" />
          <h4>Mobile Freindly Interface</h4>
          <p>
            It's not a surprise that nowadays over 80% of users surf the inernet
            using their mobile devices. Silicon is 100% responsive and optimized
            for small touch screens.
          </p>
        </div>
        <div className="feature-item">
          <img src={touchIcon} alt="androidIcon" />
          <h4>Touch-Enabled Sliders</h4>
          <p>
            In the era of touch screens it's important to ensure great user
            experience on mobile, especially when it comes to such frequently
            used interface component as slider.
          </p>
        </div>
        <div className="feature-item">
          <img src={htmlIcon} alt="htmlIcon" />
          <h4>W3C Valid HTML Code</h4>
          <p>
            All HTML files are checked via W3C validator to ensure 100% valid
            code. As you probably know invalid HTML limits innovation, but
            Silicon is innovative at its core.
          </p>
        </div>
        <div className="feature-item">
          <img src={jsIcon} alt="jsIcon" />
          <h4>Kick-Start Your Development</h4>
          <p>
            Start your development process fast and easy with Node.js and Gulp
            setup. Configuration files are included in download package. Full
            tasks automation.
          </p>
        </div>
        <div className="feature-item">
          <img src={cssIcon} alt="cssIcon" />
          <h4>Easy to Customize with Sass</h4>
          <p>
            Silicon is built using Sass. Easily change colors, typography and
            much more. It is the most mature, stable, and powerful CSS extension
            language in the world.
          </p>
        </div>
        <div className="feature-item">
          <img src={jsIcon} alt="jsIcon" />
          <h4>Future Proof Java-Script</h4>
          <p>
            Silicon core scripts as well as all dependencies are written in
            vanilla JS. And now with Bootstrap 5 we finally drop jQuery and use
            ES6 modules.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MoreFeature;
