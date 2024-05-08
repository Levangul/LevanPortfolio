import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <p>Thank you for visiting my page! I hope you love it ❤️❤️</p>
      <div className="social-icons">
        <a href="https://github.com/Levangul" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
        <a href="https://twitter.com/levangulb" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/levan-gulbatashvili-89b8a6292/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
      </div>
    </div>
  );
};

export default Footer;