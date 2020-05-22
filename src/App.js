import React, { Component } from 'react';
import './App.css';
import Box from '@material-ui/core/Box';
import { Container } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StartingComponent from './Components/StartingComponent'
import Game from './Components/GameComponent';
import { QUESTIONS } from '../src/State/quizquestions'
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      questions: QUESTIONS,
      score: 0,
      feedback: '',
      disable: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(answer = false) {
   
    //provides logic for clicking on answer only once
    if (this.state.disable === false) {
      if (answer) {
        //provides correct response
        let feedback = this.state.questions[0].feedbackCorrect
        let newScore = this.state.score
        //updates score
        newScore += 1
        this.setState({
          feedback: feedback,
          score: newScore
        })
        console.log(this.state.score)
      } else {
        //provides feedback for wrong answer
        let feedback = this.state.questions[0].feedbackWrong
        this.setState({
          feedback: feedback
        })
      }
      //logic to move on to next question
      this.toggleDisable()
    }
  }

  componentDidUpdate(){
    console.log(this.state.score)
  }

  toggleDisable(){
   let disable = !this.state.disable
    this.setState({ disable: disable})
  }

  render() {

    return (
      <Router>
        <Box className="App">
          <Container maxWidth='md' style={styles.container}>
            <Paper style={styles.bigPaper} elevation={2}>
              <Switch>
                <Route exact path="/">
                  <StartingComponent />
                </Route>
                <Route path="/game">
                  <Game 
                    questions={this.state.questions} 
                    handleClick={this.handleClick} 
                    feedback={this.state.feedback} 
                    disable={this.state.disable}/>
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
