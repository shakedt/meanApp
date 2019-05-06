import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


class RegistrationForm extends React.Component {

  static handleLoginClick() {
    console.log('login was clicked');
  }

  static handleRegistrationClick() {
    console.log('registration was clicked');
  }

  constructor(props) {
    super(props);

    this.state = { name: '' };
  }

  render() {
    const theme = createMuiTheme({
      typography: {
        useNextVariants: true,
      },
      palette: {
        type: 'dark',
      },
    });


    const { name } = this.state;
    return (
      <MuiThemeProvider theme={theme}>
      <Grid container spacing={40}>
        <Grid item xs={12}>
          <Typography variant="h5" component="h3">
            <div className="login-title"> Login Or Join</div>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-name"
            label="Name"
            className="user-name"
            value={name}
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-password-input"
            label="password"
            className="password"
            type="password"
            autoComplete="current-password"
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            color="primary"
            className="login-button"
            onClick={this.handleLoginClick}
          >
            Login
          </Button>
          <Button
            color="primary"
            className="registration-button"
            onClick={this.handleRegistrationClick}
          >
            Register
          </Button>
        </Grid>
      </Grid>
      </MuiThemeProvider>
    );
  }
}

export default RegistrationForm;