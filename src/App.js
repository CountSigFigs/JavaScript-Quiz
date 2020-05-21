import React, { Component } from 'react';
import './App.css';
import Box from '@material-ui/core/Box';
import { Container } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import StartingComponent from './Components/StartingComponent'
import Game from './Components/GameComponent';

class App extends Component {


  render() {

    return (
      <Router>
        <Box className="App">
          <Container maxWidth='md' style={styles.container}>
            <Paper style={styles.bigPaper} elevation={2}>
              <Switch>
                <Route exact path="/">             
                  <StartingComponent/>
                </Route>
                <Route path="/game">             
                  <Game/>
                </Route>
              </Switch>
            </Paper>
          </Container>
        </Box>
      </Router>
    );
  }
}

const styles = {
  container: {
    backgroundColor: 'black',
    height: 575,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bigPaper: {
    padding: 75,
  }
}

export default App;
