const http = require('http');
const port = process.env.PORT || 3000
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

require('./routes/task.route')(app)

app.listen(port,() => {
    console.log(`Server running at port `+port);
  });