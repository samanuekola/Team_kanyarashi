const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const svgCaptcha = require('svg-captcha');
const dotenv = require('dotenv');
const path = require('path');
const say = require('say');
const axios = require('axios');

dotenv.config(); 

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/captchageneration', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

const itemSchema = new mongoose.Schema({
  name: String,
  content: String,
  imageUrl: String,
});

const Item = mongoose.model('Item', itemSchema);

const createVoiceCaptcha = (callback) => {
  const text = Math.random().toString(36).substring(7); 
  const filePath = path.join(__dirname, 'captchas', `${text}.mp3`);
  
  say.export(text, null, 1.0, filePath, (err) => {
    if (err) return callback(err);
    
    callback(null, { url: `http://localhost:3000/captchas/${text}.mp3`, answer: text });
  });
};

app.get('/generate-captcha', (req, res) => {
  const type = req.query.type || 'image';

  if (type === 'math') {
    const captcha = svgCaptcha.createMathExpr({
      mathMin: 1,
      mathMax: 9,
      mathOperator: '+'
    });
    res.json({ data: captcha.data, text: captcha.text });
  } else if (type === 'voice') {
    createVoiceCaptcha((err, voiceCaptcha) => {
      if (err) {
        return res.status(500).send('Error generating voice captcha');
      }
      res.json({ data: voiceCaptcha.url, text: voiceCaptcha.answer });
    });
  } else {
    const captcha = svgCaptcha.create();
    res.json({ data: captcha.data, text: captcha.text });
  }
});

app.post('/verify-recaptcha', async (req, res) => {
  const { token } = req.body;
  const secretKey = '6LcydB4qAAAAANj_9P9qRkPtwFD9BY1OQONuyE6_'; // Replace with your reCAPTCHA Secret Key

  try {
    const response = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error verifying reCAPTCHA');
  }
});

app.post('/cart', (req, res) => {
  const { id, title, content, image } = req.body;

  Item.findOne({ name: title, content, imageUrl: image })
    .then(existingItem => {
      if (existingItem) {
        return res.status(400).send('Item already in cart');
      }

      const newItem = new Item({ name: title, content, imageUrl: image });

      newItem.save()
        .then(() => res.status(200).send('Item added to cart successfully'))
        .catch(err => res.status(400).send('Error adding item to cart: ' + err.message));
    })
    .catch(err => res.status(400).send('Error checking for existing item: ' + err.message));
});

app.get('/cart', (req, res) => {
  Item.find()
    .then(items => res.status(200).json(items))
    .catch(err => res.status(400).send('Error fetching items: ' + err.message));
});

app.delete('/cart/:id', (req, res) => {
  const { id } = req.params;

  Item.findByIdAndDelete(id)
    .then(() => res.status(200).send('Item removed from cart successfully'))
    .catch(err => res.status(400).send('Error removing item from cart: ' + err.message));
});

app.get('/projects', (req, res) => {
  Item.find()
    .then(items => res.status(200).json(items))
    .catch(err => res.status(400).send('Error fetching items: ' + err.message));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
