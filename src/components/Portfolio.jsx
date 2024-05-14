const projects = [
  {
    name: "Musical Quiz",
    image: "../../src/assets/296934869-ffc14109-5b99-4c8e-9b62-39c9278135b8 (1).png",
    githubLink: "https://github.com/Levangul/levans-musical-quiz",
  },
  {
    name: "Weather Dashboard",
    image: "../../src/assets/300971442-29d60ba0-6374-493f-ae5d-e5e3efdb6f95.png",
    githubLink: "https://github.com/Levangul/levans-weather-dashbboard",
  },
  {
    name: "Text Editor",
    image: "../../src/assets/327643907-f8e87499-eff4-4c76-8fb6-dc4d5485c7b3.png",
    githubLink: "https://github.com/Levangul/Levans-PWA-Text-Editor",
  },
  {
    name: "Work Day Scheduler",
    image: "../../src/assets/298846978-ea888700-9b92-4d4f-a51e-fbb4aebff21f.png",
    githubLink: "https://github.com/Levangul/levans-workday-scheduler",
  },
  {
    name: "Task Trek",
    image: "../../src/assets/319783637-66184bb9-d249-46fc-b5e1-a00e2ecc1e8e.png",
    githubLink: "https://github.com/Levangul/task-trek",
  },
  {
    name: "Event Space",
    image: "../../src/assets/Project_screenchot.png",
    githubLink: "https://github.com/Levangul/Event-Space",
  },
];
const Portfolio = () => {
  return (
    <div className="container">
      <h2 className="section-title">Portfolio</h2>
      <div className="row justify-content-center">
        {projects.map((project, index) => (
          <div key={index} className="col-md-6 col-lg-4 mb-4">
            <div className="project-card">
              <img
                src={project.image}
                alt={project.name}
                className="project-image"
              />
              <div className="project-info">
                <h3 className="project-name">{project.name}</h3>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
