import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiExpress, SiMysql, SiJavascript } from "react-icons/si";
import { FiClipboard } from "react-icons/fi"; 

function About() {
    return (
        <section className="about-section">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-4 col-md-6 text-center mb-4">
                        <div className="photo-container">
                            <img src={'./src/assets/983339AF-9250-4B1C-94F7-D8334B76096A 2.jpeg'} className="photo img-fluid rounded" alt="Levan's Photo" />
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-6">
                        <div className="info-container fs-4 lh-base">
                            <p>
                                Hi there, my name is Levan! Journalist, Developer, and Musician from Brooklyn, New York. I love working on details and putting everything in order... i assume it is obvious based on things i chose to do in my life. love to make things coherent and simple. Originally from Tbilisi, Georgia moved to new york in 2022 for new challenges.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 text-center mb-4">
                        <h2>Skills</h2>
                    </div>
                    <div className="col-12">
                        <div className="row justify-content-center">
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
                            {/* Add other skills here */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;