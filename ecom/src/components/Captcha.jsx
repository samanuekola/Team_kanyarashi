import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Captcha.css'; 
const Captcha = () => {
  const [captchaType, setCaptchaType] = useState('image'); 
  const [captchaContent, setCaptchaContent] = useState('');
  const [captchaText, setCaptchaText] = useState('');
  const [userCaptcha, setUserCaptcha] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [lockout, setLockout] = useState(false);

  useEffect(() => {
    generateCaptcha();
  }, [captchaType]);

  const generateCaptcha = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/generate-captcha?type=${captchaType}`);
      setCaptchaContent(response.data.data);
      setCaptchaText(response.data.text);
    } catch (error) {
      console.error('Error generating captcha:', error);
      setMessage('Error generating captcha. Please try again.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (lockout) {
      setMessage('You need to wait for 30 minutes');
      return;
    }

    if (userCaptcha === captchaText) {
      setMessage('Order successful');
      setAttempts(0);
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);

      if (newAttempts >= 2) {
        setLockout(true);
        setTimeout(() => {
          setLockout(false);
          setAttempts(0);
        }, 30 * 60 * 1000);
        setMessage('You need to wait for 30 minutes');
      } else {
        setMessage(`You have ${2 - newAttempts} attempts left`);
      }

      generateCaptcha();
    }

    setUserCaptcha('');
  };

  const handleCaptchaTypeChange = (e) => {
    setCaptchaType(e.target.value);
    setUserCaptcha('');
    setMessage('');
  };

  return (
    <div className="captcha-container">
      <h1 className="captcha-header">Captcha Verification</h1>
      <form onSubmit={handleSubmit} className="captcha-form">
        <div className="captcha-type">
          <label>
            <input
              type="radio"
              value="image"
              checked={captchaType === 'image'}
              onChange={handleCaptchaTypeChange}
            />
            Image Captcha
          </label>
          <label>
            <input
              type="radio"
              value="math"
              checked={captchaType === 'math'}
              onChange={handleCaptchaTypeChange}
            />
            Math Equation Captcha
          </label>
          <label>
            <input
              type="radio"
              value="voice"
              checked={captchaType === 'voice'}
              onChange={handleCaptchaTypeChange}
            />
            Voice Captcha
          </label>
        </div>
        {captchaType === 'voice' ? (
          <audio controls className="captcha-audio">
            <source src={captchaContent} type="audio/mp3" />
          </audio>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: captchaContent }} className="captcha-image" />
        )}
        <div className="captcha-input-group">
          <input
            type="text"
            value={userCaptcha}
            onChange={(e) => setUserCaptcha(e.target.value)}
            required
            className="captcha-input"
          />
        </div>
        <button type="submit" disabled={lockout} className="captcha-button">
          Proceed to Payment
        </button>
      </form>
      {message && <p className={`captcha-message ${lockout ? 'lockout' : ''}`}>{message}</p>}
    </div>
  );
};

export default Captcha;
