import { useState } from 'react';
import avatar2 from '../assets/83917dd04c51d7fa-sticker.png'


const Contact = () => {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'userName') {
      setUserName(value);
    } else if (name === 'message') {
      setMessage(value);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!email || !userName || !message) {
      setErrorMessage('Please fill in all fields');
      return;
    }

    setErrorMessage('');
    console.log('Submitted:', { email, userName, message });

    setEmail('');
    setUserName('');
    setMessage('');
  };

  return (
    <div className="container text-center">
      <div className="call-me-avatar">
              <img
                src={avatar2}
                className="photo-2 img-fluid rounded"
                alt="Levan's Photo"
              />
            </div>
      <form className="contact-form" onSubmit={handleFormSubmit}>
        <div className="form-group">
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Email"
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            value={userName}
            name="userName"
            onChange={handleInputChange}
            type="text"
            placeholder="Name"
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <textarea
            value={message}
            name="message"
            onChange={handleInputChange}
            placeholder="Your message"
            required
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default Contact;