import workDayScheduler from '../assets/298846978-ea888700-9b92-4d4f-a51e-fbb4aebff21f.png';
import weatherDashboard from '../assets/300971442-29d60ba0-6374-493f-ae5d-e5e3efdb6f95.png';
import taskTrek from '../assets/319783637-66184bb9-d249-46fc-b5e1-a00e2ecc1e8e.png';
import eventSpace from '../assets/Project_screenchot.png';
import quiz from '../assets/296934869-ffc14109-5b99-4c8e-9b62-39c9278135b8 (1).png';
import textEditor from '../assets/327643907-f8e87499-eff4-4c76-8fb6-dc4d5485c7b3.png';

const Portfolio = () => {
  return (
    <div className="container">
      <h2 className="text-center">Portfolio</h2>
      <div className="row justify-content-center">
      <div className="col-md-6 col-lg-4 mb-4 screenshot">
          <a href="https://github.com/Levangul/levans-musical-quiz"
          target='blank'>
            <img src={quiz} alt="Quiz" className="img-fluid rounded" style={{ maxWidth: '100%', height: 'auto' }} />
          </a>
        </div>
        <div className="col-md-6 col-lg-4 mb-4 screenshot"
        target="blank">
          <a href="https://github.com/Levangul/levans-weather-dashbboard" target='blank'>
            <img src={weatherDashboard} alt="Weather Dashboard" className="img-fluid rounded" style={{ maxWidth: '100%', height: 'auto' }} />
          </a>
        </div>
        <div className="col-md-6 col-lg-4 mb-4 screenshot">
          <a href="https://github.com/Levangul/Levans-PWA-Text-Editor"
          target='blank'>
            <img src={textEditor} alt="Text Editor" className="img-fluid rounded" style={{ maxWidth: '100%', height: 'auto' }} />
          </a>
        </div>
        <div className="col-md-6 col-lg-4 mb-4 screenshot">
          <a href="https://github.com/Levangul/levans-workday-scheduler" target='blank'>
            <img src={workDayScheduler} alt="Work Day Scheduler" className="img-fluid rounded" style={{ maxWidth: '100%', height: 'auto' }} />
          </a>
        </div>
        <div className="col-md-6 col-lg-4 mb-4 screenshot">
          <a href="https://github.com/Levangul/task-trek" target='blank'>
            <img src={taskTrek} alt="Task Trek" className="img-fluid rounded" style={{ maxWidth: '100%', height: 'auto' }} />
          </a>
        </div>
        <div className="col-md-6 col-lg-4 mb-4 screenshot">
          <a href="https://github.com/Levangul/Event-Space" target='blank'>
            <img src={eventSpace} alt="Event Space" className="img-fluid rounded" style={{ maxWidth: '100%', height: 'auto' }} />
          </a>
        </div>
      
      </div>
    </div>
  );
};

export default Portfolio;