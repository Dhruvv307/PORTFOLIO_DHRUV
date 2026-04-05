import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>

        {/* Dhruv's Photo */}
        <div className="career-photo">
          <img src="/images/PORTFOLIO_PICTURE.png" alt="Dhruv Salian" />
        </div>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Capital Insurance Group</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Built a Next.js application that reads JSON dependencies and generates safe deployment order using topological sorting. Designed a release validation layer and structured runbooks to support safer, operator-friendly releases.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Assistant</h4>
                <h5>Compass Higher Ed. Inc</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Managed and maintained software applications for campus operations, ensuring optimal performance and troubleshooting technical issues to support seamless daily operations across multiple platforms.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Olympiah</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed scalable API endpoints and front-end components using Next.js and React.js, reducing load times by 30% and enhancing overall user interaction. Developed efficient server-side functionality in Node.js.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;