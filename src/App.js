import React from 'react';
import './App.css';
import 'typeface-roboto';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import ToDoList from './components/ToDoList';
import RegistrationForm from './components/RegistrationForm';

/* eslint linebreak-style: ["error", "windows"] */
/* eslint linebreak-style: ["error", "unix"] */

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    type: 'dark',
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline>
        <div className="App">
          <ToDoList />
        </div>
      </CssBaseline>
    </MuiThemeProvider>
  );
}

export default App;
