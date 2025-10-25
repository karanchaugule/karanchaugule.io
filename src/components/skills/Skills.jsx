import React from "react";
import './skills.css'

const Skills = () => {
  const technicalSkills = [
    { name: "Python", color: "#3572A5" },
    { name: "SQL", color: "#F29111" },
    { name: "Excel", color: "#217346" },
    { name: "R", color: "#276DC3" },
  ];

  const dataVisualization = [
    { name: "Tableau", color: "#E97627" },
    { name: "Power BI", color: "#F2C811" },
    { name: "Matplotlib", color: "#11557C" },
    { name: "Seaborn", color: "#F8C471" },
  ];

  const tools = [
    { name: "Jupyter Notebook", color: "#F37626" },
    { name: "Google Sheets", color: "#34A853" },
    { name: "GitHub", color: "#181717" },
    { name: "AWS/Azure", color: "#FF6C37" },
  ];

  const currentlyLearning = [
    "Machine Learning",
    "Big Data",
    "Cloud Analytics",
    "Generative AI",
  ];

  return (
    <section id="skills" className="py-5 text-light">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="skills-title mb-3">Data Analyst Skills</h2>
          <p className="fs-5 mb-0">
            Key skills and tools I use for data analysis
          </p>
          <div className="skills-title-underline mt-3"></div>
        </div>

        {/* Categories */}
        <div className="row g-4 mb-5 justify-content-center">
          {/* Technical Skills */}
          <div className="col-lg-4 col-md-6">
            <div className="skill-category-card p-4 rounded-4 h-100">
              <div className="text-center mb-4">
                <h5 className="fw-bold" style={{ color: "#a855f7" }}>Technical Skills</h5>
                <small style={{ color: "#d1d5db" }}>Programming & Query Languages</small>
              </div>
              <div className="d-flex flex-column gap-3">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="skill-item-card p-3 rounded-3 d-flex align-items-center">
                    <div
                      className="me-3 rounded-circle"
                      style={{ backgroundColor: skill.color, width: "30px", height: "30px" }}
                    ></div>
                    <span className="fw-semibold text-white">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Data Visualization */}
          <div className="col-lg-4 col-md-6">
            <div className="skill-category-card p-4 rounded-4 h-100">
              <div className="text-center mb-4">
                <h5 className="fw-bold" style={{ color: "#a855f7" }}>Data Visualization</h5>
                <small style={{ color: "#d1d5db" }}>Tools & Libraries</small>
              </div>
              <div className="d-flex flex-column gap-3">
                {dataVisualization.map((skill, index) => (
                  <div key={index} className="skill-item-card p-3 rounded-3 d-flex align-items-center">
                    <div
                      className="me-3 rounded-circle"
                      style={{ backgroundColor: skill.color, width: "30px", height: "30px" }}
                    ></div>
                    <span className="fw-semibold text-white">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="col-lg-4 col-md-6">
            <div className="skill-category-card p-4 rounded-4 h-100">
              <div className="text-center mb-4">
                <h5 className="fw-bold" style={{ color: "#a855f7" }}>Tools</h5>
                <small style={{ color: "#d1d5db" }}>Software & Platforms</small>
              </div>
              <div className="d-flex flex-column gap-3">
                {tools.map((tool, index) => (
                  <div key={index} className="skill-item-card p-3 rounded-3 d-flex align-items-center">
                    <div
                      className="me-3 rounded-circle"
                      style={{ backgroundColor: tool.color, width: "30px", height: "30px" }}
                    ></div>
                    <span className="fw-semibold text-white">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Currently Learning */}
        <div className="text-center">
          <h4 className="mb-4" style={{ color: "#e5e7eb" }}>Currently Learning</h4>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            {currentlyLearning.map((item, index) => (
              <span
                key={index}
                className="badge learning-badge px-4 py-2 fs-6 fw-semibold"
                style={{ backgroundColor: "#7c3aed", color: "#fff" }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
