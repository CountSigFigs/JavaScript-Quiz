import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import { Fade } from 'react-animation-components';
import Box from '@material-ui/core/Box';


class Feedback extends Component {

    render (){
        if (this.props.disable){
            return (
                <Box style={styles.footer}>
                     {this.props.feedback} 
                    <Button
                        variant="contained" 
                        color="primary" 
                        style={styles.button}
                        > 
                        Next Question
                    </Button>             
                 </Box>
            )
        }
        else {
            return <Box></Box>
        }
    }
}

class Game extends Component {
    
    
    render() {

        let {key} = this.props.questions[0];

        return (
            <Fade
                in
                duration={200}
            >
                <Grid
                    container
                    direction='row'
                    justify='center'
                    alignItems='center'
                >
                    <Grid item sm={12}>
                        <div style={styles.header}>Question 1</div>
                        <Paper style={styles.question} elevation={3}>
                            <p>{this.props.questions[0].question}</p>
                        </Paper>
                    </Grid>
                    <Grid item sm={6}>
                        <Fade in>
                            <Paper style={styles.paper} elevation={3}>
                                <Button 
                                    variant="contained" 
                                    color="primary" 
                                    style={styles.button}
                                    onClick={()=> this.props.handleClick()}
                                >
                                    {this.props.questions[0].answer1}
                                </Button>
                            </Paper>
                        </Fade>
                    </Grid>
                    <Grid item sm={6}>
                        <Fade in>
                            <Paper style={styles.paper} elevation={3}>
                                <Button 
                                    variant="contained" 
                                    color="primary" 
                                    style={styles.button}
                                    onClick={()=> this.props.handleClick()}
                                >
                                    {this.props.questions[0].answer2}
                                </Button>
                            </Paper>
                        </Fade>
                    </Grid>
                    <Grid item sm={6}>
                        <Fade in>
                            <Paper style={styles.paper} elevation={3}>
                                <Button 
                                    variant="contained" 
                                    color="primary" 
                                    style={styles.button}
                                    onClick={()=> this.props.handleClick()}
                                >
                                {this.props.questions[0].answer3}                                    
                                </Button>
                            </Paper>
                        </Fade>
                    </Grid>
                    <Grid item sm={6}>
                        <Fade in>
                            <Paper style={styles.paper} elevation={3}>
                                <Button
                                    key={this.props.questions[0].key}
                                    variant="contained" 
                                    color="primary" 
                                    style={styles.button}
                                    onClick={()=> this.props.handleClick({key})}
                                >
                                    {this.props.questions[0].answer4}
                                </Button>
                            </Paper>
                        </Fade>
                    </Grid>
                    <Grid item sm={12}>
                        <Feedback feedback={this.props.feedback} disable={this.props.disable} />
                    </Grid>
                </Grid>
            </Fade>
        )
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
        width: 175
    },
    footer:{
        marginTop:25,
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
    }
}

export default Game;
