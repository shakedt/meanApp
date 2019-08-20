const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
/* eslint linebreak-style: ["error", "windows"] */

const app = express();
const port = process.env.PORT || 5001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
mongoose.connect('mongodb://shaked:163452zz@ds149606.mlab.com:49606/usermanager', { useNewUrlParser: true }).then(() => {
  console.log('moongose connected correctly.');
});

const db = mongoose.connection;
db.on('error', () => {
  console.log('so error much wow.');
});

const taskSchema = new mongoose.Schema({
  task: String,
});
const Task = mongoose.model('Task', taskSchema);

app.get('/api/addTask', (req, res) => {
  const newTask = new Task({ task: req.query.task });
  newTask.save((err) => {
    if (err) {
      res.send(err);
    } else {
      res.send({ action: 'success' });
    }
  });
});
// ToDo: create a delete task
app.get('/api/deletTask', (req, res) => {
  res.send({ action: 'great success' });
});

app.get('/api/getTasks', (req, res) => {
  let tasks = [];
  Task.find({}, (err, myTasks) => {
    tasks = myTasks.map(task => task.task);
    res.send(tasks);
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
