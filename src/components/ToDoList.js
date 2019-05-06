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

    const tasksList = window.localStorage.getItem('tasksList');
    if (tasksList) {
      this.state = { task: '', tasksList: tasksList.split(',') };
    } else {
      window.localStorage.setItem('tasksList', []);
      this.state = { task: '', tasksList: [] };
    }
    this.addTask = this.addTask.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.handleEnterClicked = this.handleEnterClicked.bind(this);
  }

  addTask() {
    const { task } = this.state;
    console.log('i was clicked');
    console.log(task);
    let tasksList = window.localStorage.getItem('tasksList');
    if (tasksList) {
      tasksList = tasksList.split(',');
      tasksList.push(task);
    } else {
      tasksList = [task];
    }

    this.setState({
      tasksList,
      task: '',
    });

    window.localStorage.setItem('tasksList', tasksList);
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
    const tasksList = window.localStorage.getItem('tasksList').split(',');
    const location = tasksList.indexOf(task);

    tasksList.splice(location, 1);

    this.setState({
      tasksList,
    });
    window.localStorage.setItem('tasksList', tasksList);
    console.log('i was deleted ');
  }

  render() {
    const { task } = this.state;
    let { tasksList } = this.state;
    const { classes } = this.props;
    tasksList = tasksList.map(myTask => (
      <div>
        {myTask}
        <DeleteSharpIcon
          onClick={this.deleteItem}
        />
        <CheckBox
          checked={false}
          onChange={this.deleteItem}
        />
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
          {tasksList}
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
