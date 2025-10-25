import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Header from "../header/Header";
import "./home.css";

const Home = () => {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 300000); // Image shown for 3 seconds
    return () => clearTimeout(timer);
  }, []);
  const handleVideoEnd = () => {
    // When video ends, show image again for 3 seconds
    setShowVideo(false);
    setTimeout(() => setShowVideo(true), 300000);
  };
  return (
    <>
      <div className="bg-dark text-light min-vh-100">
        <Header />
        <section id="home" className="d-flex align-items-center min-vh-100">
          <div className="container">
            <div className="row align-items-center">
              {/* Left Content */}
              <div className="col-lg-8 col-md-12 text-center text-lg-start">
                <h1 className="display-3 fw-bold mb-3 hero-title">
                  Karan Chaugule
                </h1>

                <h4 className="mb-4 hero-subtitle" style={{ color: "#e5e7eb" }}>
                  Data Analyst / Business Analyst
                </h4>

                <p
                  className="lead mb-5"
                  style={{ color: "#9ca3af", lineHeight: "1.7" }}
                >
                  Crafting insightful, data-driven solutions with modern analytics tools.
                  Passionate about uncovering trends, optimizing decision-making, and delivering clear, actionable insights.
                </p>

                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start mb-5">
                  <a href="#projects" className="btn btn-primary-custom btn-lg px-4">
                    View My Work
                  </a>
                  <a href="#contact" className="btn btn-outline-custom btn-lg px-4">
                    Get In Touch
                  </a>
                </div>

                <div className="d-flex gap-4 justify-content-center justify-content-lg-start">
                  <a
                    href="https://github.com/karanchaugule"
                    target="_blank"
                    rel="noreferrer"
                    className="text-light fs-2 social-icon"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/karan8727/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-light fs-2 social-icon"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="mailto:Karan.chaugule2002@gmail.com"
                    className="text-light fs-2 social-icon"
                  >
                    <FaEnvelope />
                  </a>
                </div>
              </div>

              {/* Right Content - Image then Video */}
              <div className="col-lg-4 col-md-12 text-center mt-4 mt-lg-0">
                <div className="media-frame position-relative">
                  {!showVideo ? (
                    <img
                      src="/Images/Karan_Image.png"
                      alt="Karan Chaugule"
                      className="img-fluid fade-media"
                    />
                  ) : (
  //                   <video
  //                     src="/Images/Video1.mp4"
  //                        className="img-fluid fade-media"
  //                       autoPlay
  // controls
  // playsInline
  // onEnded={handleVideoEnd}
  //                       onClick={(e) => {
  //   e.target.muted = !e.target.muted;  }}
  //                   /> 
  null //
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
