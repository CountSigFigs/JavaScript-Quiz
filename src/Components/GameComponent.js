import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';


class Game extends Component{
    render () {
        return(
            <Grid
            container
            direction='row'
            justify='center'
            alignItems='center'
          >
            <Grid item sm={12}>
                <div style={styles.header}>Question 1</div>
              <Paper style={styles.question} elevation={3}>
                <p>Variables declared with "const" must be immediately initialized to a value</p>
              </Paper>
            </Grid>
            <Grid item sm={6}>
              <Paper style={styles.paper} elevation={3}>
                <Button variant="contained" color="primary" style={styles.button}>Yes, that is correct</Button>
              </Paper>
            </Grid>
            <Grid item sm={6}>
              <Paper style={styles.paper} elevation={3}>
                <Button variant="contained" color="primary" style={styles.button}>Yes, that is correct</Button>
              </Paper>
            </Grid>
            <Grid item sm={6}>
              <Paper style={styles.paper} elevation={3}>
                <Button variant="contained" color="primary" style={styles.button}>Yes, that is correct</Button>
              </Paper>
            </Grid>
            <Grid item sm={6}>
              <Paper style={styles.paper} elevation={3}>
                <Button variant="contained" color="primary" style={styles.button}>Yes, that is correct</Button>
              </Paper>
            </Grid>
          </Grid>
        )
    }
}

const styles = {
    header:{
        marginLeft:10,
        marginBottom:10,
        fontWeight:'bold',
        fontSize:24
    },
    question:{
      textAlign: 'center',
      fontWeight:'bold',
      padding: 15,
      margin: 10,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'    
    },
    paper: {
      textAlign: 'center',
      padding: 10,
      margin: 10,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    button: {
      margin: 4
    }
  }

export default Game;
