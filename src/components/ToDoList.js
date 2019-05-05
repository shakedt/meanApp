import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import Fab from '@material-ui/core/Fab';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    input: {
        textAlign: 'center',
        'padding-right': theme.spacing.unit * 2,
        color: theme.palette.text.secondary
    },
    addIcon: {
        top: '18%'
    }
});

class ToDoList extends React.Component {
    constructor(props){
        super(props);

        let tasksList = window.localStorage.getItem('tasksList');
        if(tasksList) {
            this.state = {task: '', tasksList: tasksList.split(',')};
        } else {
            window.localStorage.setItem('tasksList', []);
            this.state = {task: '', tasksList: []}
        }
        this.addTask = this.addTask.bind(this);
        this.updateInputValue = this.updateInputValue.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.handleEnterClicked = this.handleEnterClicked.bind(this);
    }

    componentDidMount() {

    }

    render() {
        const { classes } = this.props;
        const tasksList = this.state.tasksList.map((task) => {
           return (<div>{task}<DeleteSharpIcon onClick={this.deleteItem.bind(this, task)}></DeleteSharpIcon></div>);
        });

        return (
            <div className='toDoList'>
                    <Grid item xs={12}>
                        <Typography variant="h5" component="h3">
                            <div className='title'>
                                To Do Is Here
                            </div>
                        </Typography>
                    </Grid>
                <Grid container spacing={40} className={classes.input}>
                    <Grid item xs={12} className={classes.input}>
                        <TextField
                            id="outlined-with-placeholder"
                            label="Please Enter The Task"
                            value={this.state.task}
                            onChange={this.updateInputValue}
                            onKeyDown={this.handleEnterClicked}
                            className={classes.input}
                            margin="normal"
                            variant="outlined"
                        />
                        <div >
                            <Fab color="primary" aria-label="Add" className={classes.addIcon} onClick={this.addTask}>
                                <AddIcon></AddIcon>
                            </Fab>
                        </div>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    {tasksList}
                </Grid>
                </div>
        );
    }

    addTask() {
        console.log('i was clicked');
        console.log(this.state.task);
        let tasksList = window.localStorage.getItem('tasksList');
        if(tasksList) {
            tasksList = tasksList.split(',');
            tasksList.push(this.state.task);
        } else {
            tasksList = [this.state.task];
        }

        this.setState({
            tasksList: tasksList,
            task: ''
        });

        window.localStorage.setItem('tasksList', tasksList);
    }

    handleEnterClicked(event) {
        if(event.key === 'Enter') {
            this.addTask();
        }
    }

    updateInputValue(event) {
        this.setState({
            task: event.target.value
        });
    }

    deleteItem(task) {
        let tasksList = window.localStorage.getItem('tasksList').split(',');
        let location = tasksList.indexOf(task);

        tasksList.splice(location, 1);

        this.setState({
           tasksList: tasksList
        });
        window.localStorage.setItem('tasksList', tasksList);
        console.log('i was deleted ');
    }
}

export default withStyles(styles)(ToDoList);