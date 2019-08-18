const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
/* eslint linebreak-style: ["error", "windows"] */

const app = express();
const port = process.env.PORT || 5001;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
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

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
  const newTask = new Task({ task: req.params.task });
  newTask.save((err, tasks) => {
    if (err) {
      console.log('error');
    } else {
      if (tasks) {
        console.log(tasks);
      }
      console.log('success');
    }
    return true;
  });
});

app.get('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.get('/api/getTasks', (req, res) => {
  // res.send(db.collection('tasks').find());
  console.log(db.collection.find('Tasks'));
  console.log(db);
  console.log('');
  res.send('great success');
});

app.listen(port, () => console.log(`Listening on port ${port}`));
