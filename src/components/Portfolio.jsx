const projects = [
  {
    name: "Musical Quiz",
    image:
      "../../src/assets/quiz.png",
    githubLink: "https://github.com/Levangul/levans-musical-quiz",
  },
  {
    name: "Weather Dashboard",
    image:
      "../../src/assets/weather.png",
    githubLink: "https://github.com/Levangul/levans-weather-dashbboard",
  },
  {
    name: "Text Editor",
    image:
      "../../src/assets/editor.png",
    githubLink: "https://github.com/Levangul/Levans-PWA-Text-Editor",
  },
  {
    name: "Work Day Scheduler",
    image:
      "../../src/assets/scheduler.png",
    githubLink: "https://github.com/Levangul/levans-workday-scheduler",
  },
  {
    name: "Task Trek",
    image:
      "../../src/assets/tasktrek.png",
    githubLink: "https://github.com/Levangul/task-trek",
  },
  {
    name: "Event Space",
    image: "../../src/assets/eventspace.png",
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
                  Github
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
