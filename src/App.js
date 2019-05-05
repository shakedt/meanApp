import React from 'react';
import './App.css';
import RegistartionForm from './components/RegistartionForm';
import 'typeface-roboto';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import ToDoList from './components/ToDoList';

const theme = createMuiTheme({
    palette: {
        type: 'dark'
    }
});

function App() {
  return (
      <MuiThemeProvider theme={theme}>
          <CssBaseline>
            <div className="App">
              <RegistartionForm/>
                <ToDoList/>
            </div>
          </CssBaseline>
      </MuiThemeProvider>
  );
}

export default App;
