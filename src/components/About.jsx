import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiExpress, SiMysql, SiJavascript, SiJest } from "react-icons/si";

import avatar from '../assets/64804861f8485df3-sticker.png';

function About() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-4 col-md-6 text-center mb-4">
            <div className="photo-container">
              <img
                src={avatar}
                className="photo img-fluid rounded-circle"
                alt="Levan's Photo"
              />
            </div>
          </div>
          <div className="col-lg-8 col-md-6">
            <div className="info-container fs-4 lh-base text-start">
              <p>
                <span className="highlight">Hi! I’m Levan,</span> a full-stack developer, journalist, and musician based in Brooklyn, New York. I’m passionate about crafting details and bringing clarity to everything I do, whether it’s coding, writing, or making music. I thrive on creating things that are coherent and straightforward. Originally from Tbilisi, Georgia, I moved to New York in 2022 to embrace new challenges and continue growing in my journey.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center skills">
          <div className="col-12 text-center mb-4">
            <h3 className="section-title">Areas of Expertise</h3>
          </div>
          <div className="col-12">
            <div className="row justify-content-center">
              {[
                { icon: <FaHtml5 />, label: "HTML5", color: "#E34F26" },
                { icon: <FaCss3 />, label: "CSS3", color: "#264DE4" },
                { icon: <SiJavascript />, label: "JavaScript", color: "#F7DF1E" },
                { icon: <FaReact />, label: "React", color: "#61DAFB" },
                { icon: <FaNodeJs />, label: "Node.js", color: "#339933" },
                { icon: <FaDatabase />, label: "SQL/Database", color: "#336791" },
                { icon: <SiMongodb />, label: "MongoDB", color: "#47A248" },
                { icon: <SiExpress />, label: "Express", color: "#000000" },
                { icon: <SiMysql />, label: "MySQL", color: "#00758F" },
                { icon: <SiJest />, label: "Jest", color: "#99424F" },
              ].map((skill, index) => (
                <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center mb-4" key={index}>
                  <div className="skill-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <p className="mt-2 skill-label">{skill.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
