const express = require('express');
const cors = require('cors');
const app = express();

const mongoose = require('mongoose');
const User = require('./models/user');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
mongoose
  .connect('mongodb://127.0.0.1:27017/snSilos')
  .then(() => console.log('Connected to db'))
  .catch((err) => console.log('Error'));

app.get('/allusers', async (req, res) => {
  const users = await User.find();
  res.send(users);
});
app.get('/oneProduct/:id', async (req, res) => {
  const { id } = req.params;
  const users = await User.findOne({ _id: id });
  res.send(users);
});
app.post('/adduser', async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  console.log(newUser);
  res.send('Data added');
});
app.delete('/admin/:id', async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndDelete(id);
  res.send('Data deleted');
});
app.patch('/admin/:id', async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndUpdate(id, { ...req.body });
  res.send('Data updated');
});

app.listen(4000, () => console.log('Live at 4000'));
