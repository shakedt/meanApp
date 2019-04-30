import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class RegistartionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = { name:  ''};
    }
    render() {
        return (
            <Grid container spacing={16}>
                <Grid item xs={12}>
                    <Typography variant="h5" component="h3">
                        <div className='login-title'> Login Or Join</div>
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id='outlined-name'
                        label='Name'
                        className='user-name'
                        value={this.state.name}
                        margin='normal'
                        variant='outlined'
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id='outlined-password-input'
                        label='password'
                        className='password'
                        type='password'
                        autoComplete='current-password'
                        margin='normal'
                        variant='outlined'
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        color='primary'
                        className='login-button'
                        onClick={this.handleLoginClick}
                    >Login</Button>
                    <Button
                        color='primary'
                        className='registration-button'
                        onClick={this.handleRegistrationClick}
                    >Register</Button>
                </Grid>
            </Grid>
        );
    }

    handleLoginClick() {
        console.log('login was clicked');
    }

    handleRegistrationClick() {
        console.log('registration was clicked')
    }
}

export default RegistartionForm;