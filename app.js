// const port = process.env.PORT || 3000
const express = require('express');
const mongoose = require('mongoose');

const dev_db_url = 'mongodb://someuser:abcd1234@ds123619.mlab.com:23619/productstutorial';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

require('./models/task.model');

require('./routes/task.route')(app)

const port = 3000;
app.listen(port, () => {
    console.log(`Server running at port `+port);
});






