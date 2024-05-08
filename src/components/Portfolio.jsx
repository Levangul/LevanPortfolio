import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiExpress, SiMysql } from "react-icons/si";
import { FiClipboard } from "react-icons/fi"; 

const Portfolio = () => {
  return (
    <div>
      <h2>My Skills</h2>
      <div>
        <FaHtml5 size={40} color="#E34F26" />
        <FaCss3 size={40} color="#264DE4" />
        <FaReact size={40} color="#61DAFB" />
        <FaNodeJs size={40} color="#339933" />
        <FaDatabase size={40} color="#336791" />
        <SiMongodb size={40} color="#47A248" /> 
        <SiExpress size={40} color="#000000" /> 
        <SiMysql size={40} color="#00758F" /> 
        <FiClipboard size={40} color="#99424F" />
      </div>
    </div>
  );
};

export default Portfolio;