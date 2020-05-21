import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';

const jsLogo = require('../Images/JavaScript.png');

class Game extends Component{
    render () {
        return(
            <Grid
            container
            direction='row'
            justify='center'
            alignItems='center'
          >
            <Grid item sm={7}>
              <Paper style={styles.paper} elevation={3}>
                <img src={jsLogo} alt='javscript logo'></img>
              </Paper>
            </Grid>
            <Grid item sm={5}>
              <Paper style={styles.paper} elevation={3}>
                <div style={styles.title}>JavaScript Quiz</div>
                <div>Test your knowledge of JavaScript by answering this 10 question quiz.Click the button
          below when you are ready to begin.</div>
                <Button variant="contained" color="primary" style={styles.button}> Start</Button>
              </Paper>
            </Grid>
          </Grid>
        )
    }
}

const styles = {
    paper: {
      textAlign: 'center',
      padding: 10,
      margin: 10,
      height: 324,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    title: {
      fontWeight: 'bold',
      fontSize: 32,
      marginTop: 7,
      marginBottom: 7
    },
    button: {
      margin: 4
    }
  }

export default Game;
