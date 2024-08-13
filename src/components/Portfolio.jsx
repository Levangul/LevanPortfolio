const projects = [
  {
    name: "Musical Quiz",
    image:
      "/images/panorama.png",
    githubLink: "https://github.com/Levangul/virtual-art-gallery",
    liveLink: "https://art-gallery-panorama-7c4924971a42.herokuapp.com/",
  },
  {
    name: "Event Space",
    image: "/images/eventspace.png",
    githubLink: "https://github.com/Levangul/Event-Space",
  },
  {
    name: "Task Trek",
    image:
      "/images/tasktrek.png",
    githubLink: "https://github.com/Levangul/task-trek",
  },
  {
    name: "Weather Dashboard",
    image:
      "/images/weather.png",
    githubLink: "https://github.com/Levangul/levans-weather-dashbboard",
  },
  {
    name: "Text Editor",
    image:
      "/images/editor.png",
    githubLink: "https://github.com/Levangul/Levans-PWA-Text-Editor",
  },
  {
    name: "Work Day Scheduler",
    image:
      "/images/scheduler.png",
    githubLink: "https://github.com/Levangul/levans-workday-scheduler",
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
