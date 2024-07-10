const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const svgCaptcha = require('svg-captcha');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/captchageneration', {
  useNewUrlParser: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Define a schema and model for your data
const itemSchema = new mongoose.Schema({
  name: String,
  content: String,
  imageUrl: String,
});

const Item = mongoose.model('Item', itemSchema);

app.get('/generate-captcha', (req, res) => {
  const captcha = svgCaptcha.create();
  res.json({ data: captcha.data, text: captcha.text });
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
