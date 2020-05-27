import React, { Component } from 'react';
import './App.css';
import Box from '@material-ui/core/Box';
import { Container } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StartingComponent from './Components/StartingComponent';
import Game from './Components/GameComponent';
import { QUESTIONS } from '../src/State/quizquestions'


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      questions: QUESTIONS,
      score: 0,
      current:0,
      total:10,
      feedback: '',
      color: '',
      disable: false,
      percentage:0
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleNextQuestion = this.handleNextQuestion.bind(this)

  }
  
  handleClick(answer) {

    //provides logic for clicking on answer only once
    if (this.state.disable === false) {
      if (answer === this.state.questions[0].key) {
        //provides correct response
        let feedback = this.state.questions[0].feedbackCorrect
        //updates score and current
        this.setState(prevState => ({
          feedback: feedback,
          score: prevState.score + 1,
          color:'green',
          current: prevState.current + 1
          })
        )
      } else {
        //provides feedback for wrong answer
        let feedback = this.state.questions[0].feedbackWrong
        this.setState(prevState => ({
          current: prevState.current + 1,
          feedback: feedback,
          color:'red'
          })
        )
      }
      //logic to move on to next question
      this.toggleDisable()
    }
  } 

  handleNextQuestion(){

    //pops the question for the next one to be displayed
    let nextQuestions = this.state.questions;
    nextQuestions.shift(0)

    this.setState({
      questions: nextQuestions,
      percentage: (this.state.current/this.state.total * 100)
      })
    this.toggleDisable()
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
                    handleNextQuestion={this.handleNextQuestion}
                    feedback={this.state.feedback} 
                    color={this.state.color}
                    percentage={this.state.percentage}
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
