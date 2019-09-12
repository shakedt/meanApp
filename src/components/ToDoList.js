import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import Fab from '@material-ui/core/Fab';
import { withStyles } from '@material-ui/core/styles';
import CheckBox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';

/* eslint linebreak-style: ["error", "windows"] */
// /* eslint linebreak-style: ["error", "unix"] */

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  input: {
    textAlign: 'center',
    'padding-right': theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
  },
  addIcon: {
    top: '18%',
  },
});


class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    // ToDo:  connect To Redux.
    // ToDo: turn local storage to requests from mongodb
    this.state = { task: '', tasksList: [], completedTasks: [] };
    this.addTask = this.addTask.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.handleEnterClicked = this.handleEnterClicked.bind(this);
    this.markTaskAsComplete = this.markTaskAsComplete.bind(this);
    this.fetchTasks();
  }

  // add logic to set task as complete
  fetchTasks() {
    fetch('http://localhost:5001/api/getTasks').then((data) => {
      data.json().then((unfilteredTasks) => {
        console.log(unfilteredTasks);
        // toDo:turn this into a better soultion this might be abit haviy with all the filtering;
        const tasksList = unfilteredTasks
          .filter(task => task.completed !== true)
          .map(task => task.task);
        const completedTasks = unfilteredTasks
          .filter(task => task.completed === true)
          .map(task => task.task);
        console.log(tasksList);
        this.setState({
          tasksList,
          completedTasks,
        });
      });
    });
  }

  addTask() {
    const { task } = this.state;
    fetch(`http://localhost:5001/api/addTask?task=${task}`).then((data) => {
      data.json().then((currentTask) => {
        if (currentTask.action === 'success') {
          this.fetchTasks();
        }
      });
    });

    this.setState({
      task: '',
    });
  }

  markTaskAsComplete(task) {
    fetch(`http://localhost:5001/api/markTaskCompleted?task=${task}`).then((data) => {
      this.fetchTasks();
    });
  }

  handleEnterClicked(event) {
    if (event.key === 'Enter') {
      this.addTask();
    }
  }

  updateInputValue(event) {
    this.setState({
      task: event.target.value,
    });
  }

  deleteItem(task) {
    fetch(`http://localhost:5001/api/deleteTask?task=${task}`).then((data) => {
      data.json().then((response) => {
        if (response.action === 'success') {
          this.fetchTasks();
        }
      });
    });
  }

  render() {
    const { task, completedTasks } = this.state;
    let { tasksList } = this.state;
    const { classes } = this.props;
    tasksList = tasksList.map(myTask => (
      <div>
        {myTask}
        <DeleteSharpIcon
          onClick={() => {
            this.deleteItem(myTask);
          }}
        />
        <CheckBox
          checked={false}
          onChange={() => {
            this.markTaskAsComplete(myTask);
          }}
        />
      </div>
    ));

    const compTasks = completedTasks.map(completedTask => (
      <div>
        { completedTask }
      </div>
    ));
    return (
      <div className="toDoList">
        <Grid item xs={12}>
          <Typography variant="h5" component="h3">
            <div className="title">
              To Do Is Here
            </div>
          </Typography>
        </Grid>
        <Grid container spacing={40} className={classes.input}>
          <Grid item xs={12} className={classes.input}>
            <TextField
              id="outlined-with-placeholder"
              label="Please Enter The Task"
              value={task}
              onChange={this.updateInputValue}
              onKeyDown={this.handleEnterClicked}
              className={classes.input}
              margin="normal"
              variant="outlined"
            />
            <Fab color="primary" aria-label="Add" className={classes.addIcon} onClick={this.addTask}>
              <AddIcon />
            </Fab>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <div>Completed Tasks</div>
          { compTasks }
          <div> To Do Tasks</div>
          { tasksList }
        </Grid>
      </div>
    );
  }
}


ToDoList.defaultProps = {
  classes: '',
};

ToDoList.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(ToDoList);
