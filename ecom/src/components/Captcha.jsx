// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Captcha = () => {
  const [captchaImage, setCaptchaImage] = useState('');
  const [captchaText, setCaptchaText] = useState('');
  const [userCaptcha, setUserCaptcha] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [lockout, setLockout] = useState(false);

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = async () => {
    const response = await axios.get('http://localhost:3000/generate-captcha');
    setCaptchaImage(response.data.data);
    setCaptchaText(response.data.text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (lockout) {
      setMessage('You need to wait for 30 mins');
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
        setMessage('You need to wait for 30 mins');
      } else {
        setMessage(`You only got ${2 - newAttempts} times to re-enter`);
      }

      generateCaptcha();
    }

    setUserCaptcha('');
  };

  return (
    <div className='m-4'>
      <h1>Captcha Verification</h1>
      <form onSubmit={handleSubmit}>
        <div dangerouslySetInnerHTML={{ __html: captchaImage }} />
        <div>
          <input
            type="text"
            value={userCaptcha}
            onChange={(e) => setUserCaptcha(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={lockout}>
          Proceed to Payment
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Captcha;
