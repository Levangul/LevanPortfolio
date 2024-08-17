const projects = [
  {
    name: "Panorama",
    image:
      "/images/panorama.png",
    githubLink: "https://github.com/Levangul/virtual-art-gallery",
    liveLink: "https://art-gallery-panorama-7c4924971a42.herokuapp.com/",
    description: "Panorama is a virtual art gallery featuring 3D visualization of paintings displayed in a gallery room. The project is built using the MERN stack (MongoDB, Express, React, Node.js), providing a seamless and interactive user experience. MongoDB is utilized to manage the extensive collection of artworks, while Express and Node.js power the backend to handle server-side operations efficiently. The front end, built with React, ensures a dynamic and responsive interface, allowing users to explore the gallery effortlessly."
  },
  {
    name: "Event Space",
    image: "/images/eventspace.png",
    githubLink: "https://github.com/Levangul/Event-Space",
    description: "Event Space is a streamlined web application designed to showcase upcoming events and provide users with an intuitive search experience. The project is built using HTML, CSS, Bootstrap, and JavaScript, creating a clean and responsive interface. By integrating an external API from SeatGeek, users can easily search for events and access detailed information directly within the app. The use of Bootstrap ensures a consistent and mobile-friendly design, while JavaScript handles the dynamic interactions and data retrieval from the API."
  },
  {
    name: "Task Trek",
    image:
      "/images/tasktrek.png",
    githubLink: "https://github.com/Levangul/task-trek",
    description: "Task Trek is a task management application that allows users to create, save, and organize tasks effectively. The project is built using SQL for database management, enabling reliable storage and retrieval of tasks based on their status—such as pending, completed, or in progress. The front end is crafted with Handlebars, providing a clean and dynamic interface, while JavaScript handles task updates and status filtering, ensuring a smooth and intuitive user experience."
  },

  
];
const Portfolio = () => {
  return (
    <div className="container">
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
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
