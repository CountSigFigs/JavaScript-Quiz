import React, { Component } from 'react';
import './App.css';
import Box from '@material-ui/core/Box';
import { Container } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import StartingComponent from './Components/StartingComponent'
import Game from './Components/GameComponent';
import { QUESTIONS } from '../src/State/quizquestions'
class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      questions: QUESTIONS,
      score:0,
      feedBack:''
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(answer = false){
   // let newScore = this.state.score;
    //newScore+=1
    //this.setState({
      //score:newScore
    //})
    if (answer){
      console.log('Yay you picked the right answer!')
    } else {
      console.log('You picked the wrong answer')
    }
    
  }

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
                  <Game questions={this.state.questions} handleClick={this.handleClick}/>
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
