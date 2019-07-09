const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/todo');
require('./models/task.model');

const Task = mongoose.model('todoitem');

app.get('/test', (req, res) => {
  Task.find({}).then((data) => {
    res.json({
      todoitems: data
    });
  }, (err) => {
    res.status(500).json('Error');
  })
});

require('./routes/task.route')(app)

app.listen(3000);