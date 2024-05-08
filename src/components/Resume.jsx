import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiExpress, SiMysql, SiJavascript } from "react-icons/si";
import { FiClipboard } from "react-icons/fi"; 

const Portfolio = () => {
  return (
    
    <div className="container skills">
      
      <div className="row justify-content-center ">
        <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center mb-4">
          <FaHtml5 size={40} color="#E34F26" />
          <p className="mt-2">HTML5</p>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center mb-4">
          <FaCss3 size={40} color="#264DE4" />
          <p className="mt-2">CSS3</p>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center mb-4">
          <SiJavascript size={40} color="#F7DF1E" />
          <p className="mt-2">JavaScript</p>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center mb-4">
          <FaReact size={40} color="#61DAFB" />
          <p className="mt-2">React</p>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center mb-4">
          <FaNodeJs size={40} color="#339933" />
          <p className="mt-2">Node.js</p>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center mb-4">
          <FaDatabase size={40} color="#336791" />
          <p className="mt-2">Database</p>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center mb-4">
          <SiMongodb size={40} color="#47A248" /> 
          <p className="mt-2">MongoDB</p>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center mb-4">
          <SiExpress size={40} color="#000000" /> 
          <p className="mt-2">Express</p>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center mb-4">
          <SiMysql size={40} color="#00758F" /> 
          <p className="mt-2">MySQL</p>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center mb-4">
          <FiClipboard size={40} color="#99424F" />
          <p className="mt-2">Jest</p>
        </div>
      </div>
    </div>
   
  );
};

export default Portfolio;