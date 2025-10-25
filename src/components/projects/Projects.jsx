import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "./projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Ecommerce Sales Analysis",
      description:
        "Leveraged tools like Excel, SQL, and Power BI to analyze customer behavior, identify top-selling products, and uncover sales trends, enabling data-driven decision-making and revenue optimization.",
      image: "/Ecommerce.png",
      // tech: ["React", "Node.js", "MongoDB", "Bootstrap", "Auth0", "Cloudinary"],
      // demo: "#",
      code: "https://github.com/karanchaugule/E-Commerce-Sales-Analysis-",
    },
    {
      title: "Credit Card Financial Dashboard",
      description:
        "Built an interactive dashboard using Power BI to monitor spending patterns, track outstanding balances, categorize expenses, and provide actionable insights for better financial management.",
      image: "/Credit.png",
      // tech: ["React", "Node.js", "MongoDB", "Bootstrap", "JWT", "Bcrypt.js"],
      // demo: "https://notes-app-zry3.vercel.app/",
      code: "https://github.com/karanchaugule/Credit_Card_Financial_Dashboard",
    },
    {
      title: "Insurance Risk & Claim Analysis:",
      description:
        "Analyzed historical claim data to identify risk patterns, detect fraud indicators, and segment high-risk customers using SQL and data visualization tools for enhanced underwriting and decision-making.",
      image: "/Risk.png",
      // tech: ["HTML", "CSS", "JavaScript", "JSON", "LocalStorage"],
      // demo: "https://quiz-app-gules-nu.vercel.app/QuizApp.html",
      code: "https://github.com/karanchaugule/Insurance_Risk_And_Claims_Analysis",
    },
  ];

  return (
    <section id="projects" className="min-vh-100 text-light pt-5" style={{ backgroundColor: "#0d0d0d" }}>
      <div className="container py-5">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h1 className="fw-bold mb-3 projects-title">Featured Projects</h1>
          <p className="fs-5 mb-0">Some of my recent work and personal projects</p>
          <div className="mx-auto mt-3" style={{ width: "80px", height: "4px", background: "linear-gradient(90deg, #a855f7, #8b5cf6)", borderRadius: "2px" }} />
        </div>

        <div className="row g-4">
          {projects.map((project, idx) => (
            <div key={idx} className="col-lg-4 col-md-6">
              <div className="project-card h-100 rounded-4 p-0">
                {/* Project Image with Hover Overlay */}
                <div className="position-relative" style={{ height: "220px", overflow: "hidden", borderRadius: "20px 20px 0 0" }}>
                  <img src={project.image} alt={project.title} className="project-image w-100 h-100" />
                  {/* Hover overlay */}
                  <div className="project-overlay position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center gap-3">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-project">
                      <FaExternalLinkAlt />
                    </a>
                    <a href={project.code} target="_blank" rel="noopener noreferrer" className="btn btn-project">
                      <FaGithub />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4">
                  <h5 className="fw-bold text-white mb-3">{project.title}</h5>
                  <p className="mb-4" style={{ lineHeight: "1.6" }}>{project.description}</p>

                  {/* Tech Badges */}
                  {/* <div className="d-flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="tech-badge badge px-3 py-2">
                        {t}
                      </span>
                    ))}
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-5">
          <a href="https://github.com/karanchaugule" target="_blank" rel="noopener noreferrer" className="btn btn-view-all btn-lg px-5 py-3 fw-semibold">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
