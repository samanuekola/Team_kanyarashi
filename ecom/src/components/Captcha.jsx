import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import '../Captcha.css'; 

const Captcha = () => {
  const [captchaType, setCaptchaType] = useState('image');
  const [captchaContent, setCaptchaContent] = useState('');
  const [captchaText, setCaptchaText] = useState('');
  const [userCaptcha, setUserCaptcha] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [lockout, setLockout] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState('');
  const [recaptchaVerified, setRecaptchaVerified] = useState(false);

  const siteKey = '6LcydB4qAAAAABr_pIP_WAOMBBzOR37cyo3XV2zy'; // Replace with your reCAPTCHA Site Key

  useEffect(() => {
    if (captchaType !== 'google') {
      generateCaptcha();
    }
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (lockout) {
      setMessage('You need to wait for 30 minutes');
      return;
    }

    if (captchaType === 'google') {
      if (!recaptchaVerified) {
        setMessage('Please complete the reCAPTCHA');
        return;
      }
      setMessage('Order successful');
      setAttempts(0);
      return;
    }

    try {
      const recaptchaResponse = await axios.post('http://localhost:3000/verify-recaptcha', { token: recaptchaToken });
      if (!recaptchaResponse.data.success) {
        setMessage('reCAPTCHA verification failed. Please try again.');
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
    } catch (error) {
      console.error('Error verifying reCAPTCHA:', error);
      setMessage('Error verifying reCAPTCHA. Please try again.');
    }
  };

  const handleCaptchaTypeChange = (e) => {
    setCaptchaType(e.target.value);
    setUserCaptcha('');
    setMessage('');
  };

  const onRecaptchaChange = (token) => {
    setRecaptchaToken(token);
    setRecaptchaVerified(true);
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
          <label>
            <input
              type="radio"
              value="google"
              checked={captchaType === 'google'}
              onChange={handleCaptchaTypeChange}
            />
            Google Captcha
          </label>
        </div>
        {captchaType === 'voice' ? (
          <audio controls className="captcha-audio">
            <source src={captchaContent} type="audio/mp3" />
          </audio>
        ) : captchaType === 'google' ? (
          <ReCAPTCHA
            sitekey={siteKey}
            onChange={onRecaptchaChange}
          />
        ) : (
          <div dangerouslySetInnerHTML={{ __html: captchaContent }} className="captcha-image" />
        )}
        {captchaType !== 'google' && (
          <div className="captcha-input-group">
            <input
              type="text"
              value={userCaptcha}
              onChange={(e) => setUserCaptcha(e.target.value)}
              required
              className="captcha-input"
            />
          </div>
        )}
        <button type="submit" disabled={lockout} className="captcha-button">
          Proceed to Payment
        </button>
      </form>
      {message && <p className={`captcha-message ${lockout ? 'lockout' : ''}`}>{message}</p>}
    </div>
  );
};

export default Captcha;
