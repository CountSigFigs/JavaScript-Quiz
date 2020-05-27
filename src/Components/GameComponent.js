import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import ProgressBar from './ProgressBar';

class Game extends Component {
    
    render() {

        return (
                <Grid
                    container
                    direction='row'
                    justify='center'
                    alignItems='center'
                >
                    <Grid item sm={12}>
                        <p style={styles.progress}>Progress: </p><ProgressBar percentage={this.props.percentage}/>
                        <div style={styles.header}>Question: {this.props.questions[0].id}</div>
                        <Paper style={styles.question} elevation={3}>
                            <p>{this.props.questions[0].question}</p>
                        </Paper>
                    </Grid>
                    <Grid item sm={6}>
                            <Paper style={styles.paper} elevation={3}>
                                <Button 
                                    variant="contained" 
                                    color="primary" 
                                    style={styles.button}
                                    onClick={()=> this.props.handleClick('answer1')}
                                >
                                    {this.props.questions[0].answer1}
                                </Button>
                            </Paper>
                    </Grid>
                    <Grid item sm={6}>
                            <Paper style={styles.paper} elevation={3}>
                                <Button 
                                    variant="contained" 
                                    color="primary" 
                                    style={styles.button}
                                    onClick={()=> this.props.handleClick('answer2')}
                                >
                                    {this.props.questions[0].answer2}
                                </Button>
                            </Paper>
                    </Grid>
                    <Grid item sm={6}>
                            <Paper style={styles.paper} elevation={3}>
                                <Button 
                                    variant="contained" 
                                    color="primary" 
                                    style={styles.button}
                                    onClick={()=> this.props.handleClick('answer3')}
                                >
                                {this.props.questions[0].answer3}                                    
                                </Button>
                            </Paper>
                    </Grid>
                    <Grid item sm={6}>
                            <Paper style={styles.paper} elevation={3}>
                                <Button
                                    key={this.props.questions[0].key}
                                    variant="contained" 
                                    color="primary" 
                                    style={styles.button}
                                    onClick={()=> this.props.handleClick('answer4')}
                                >
                                    {this.props.questions[0].answer4}
                                </Button>
                            </Paper>
                    </Grid>
                    <Grid item sm={12}>
                        <Feedback 
                            feedback={this.props.feedback} 
                            disable={this.props.disable} 
                            handleNextQuestion={this.props.handleNextQuestion}   
                            color={this.props.color} 
                        />
                    </Grid>
                </Grid>
        )
    }
}
class Feedback extends Component {

    render (){
        if (this.props.disable){
                return (
                    <Box style={styles.footer}>
                         <p style={{color:`${this.props.color}`}}>{this.props.feedback}</p>
                        <Button
                            variant="contained" 
                            color="primary" 
                            style={styles.button}
                            onClick={this.props.handleNextQuestion}
                            > 
                            Next Question
                        </Button>             
                     </Box>
                )
        } else {
            return <Box></Box>
        }
    }
}

const styles = {
    header: {
        marginLeft: 10,
        marginBottom: 10,
        fontWeight: 'bold',
        fontSize: 24
    },
    question: {
        textAlign: 'center',
        fontWeight: 'bold',
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
        margin: 4,
        width: 175,
        textTransform:'none'
    },
    progress:{
        marginBottom:5,
        fontWeight:'bold'
    },
    footer:{
        marginTop:25,
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
    }
}


export default Game;
