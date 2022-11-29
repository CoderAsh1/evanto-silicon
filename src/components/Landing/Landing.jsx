import "./landing.scss";

const Landing = () => {
  return (
    <section className="landing" id="landing">
      <h1>Landing Pages</h1>
      <p>Choose from pre-built layouts of our unique landing pages</p>

      <div className="pages">
        <div className="item">
          <img
            src="https://silicon.madrasthemes.com/wp-content/uploads/2022/01/app-showcase.jpg
"
            alt="mobileApp"
          />
          <h2>Mobile App Showcase</h2>
        </div>
        <div className="item">
          <img
            src="https://silicon.madrasthemes.com/wp-content/uploads/2022/01/saas-v1.jpg"
            alt="saas"
          />
          <h2>Saas v.1</h2>
        </div>
        <div className="item">
          <img
            src="https://silicon.madrasthemes.com/wp-content/uploads/2022/01/saas-v2.jpg"
            alt="saas2"
          />
          <h2>Saas v.2</h2>
        </div>
        <div className="item">
          <img
            src="https://silicon.madrasthemes.com/wp-content/uploads/2022/01/financial.jpg"
            alt="Finance"
          />
          <h2>Financial Consulting</h2>
        </div>
        <div className="item">
          <img
            src="https://silicon.madrasthemes.com/wp-content/uploads/2022/01/medical.jpg"
            alt="medical"
          />
          <h2>Medical</h2>
        </div>
        <div className="item">
          <img
            src="https://silicon.madrasthemes.com/wp-content/uploads/2022/01/digital-agency.jpg"
            alt="digital"
          />
          <h2>Digital Agency</h2>
        </div>
        <div className="item">
          <img
            src="https://silicon.madrasthemes.com/wp-content/uploads/2022/01/conference.jpg"
            alt="corporate"
          />
          <h2>Conference</h2>
        </div>
        <div className="item">
          <img
            src="https://silicon.madrasthemes.com/wp-content/uploads/2022/01/software-company.jpg"
            alt="it"
          />
          <h2>IT (Software) Company </h2>
        </div>
        <div className="item">
          <img
            src="https://silicon.madrasthemes.com/wp-content/uploads/2022/01/blog-homepage.jpg"
            alt="blog"
          />
          <h2>Blog Homepage </h2>
        </div>
      </div>
    </section>
  );
};

export default Landing;
