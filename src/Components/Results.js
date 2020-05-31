import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const joke = require('../Images/jsjoke.png')

class Results extends Component{

    render () {
        let score = (this.props.score / this.props.total) * 100
        return (
            <Grid
            container
            direction='row'
            justify='center'
            alignItems='center' >
                <Grid item sm={7}>
                    <img src={joke} alt='life motto of js coder joke'></img>
                </Grid>
                <Grid item sm={5}>
                    <h1 style={styles.thanks}>Thanks for taking my JavaScript quiz!</h1>
                        <p style={styles.score}>score: {score}% </p>
                    <p style={styles.text}> I hope you enjoyed taking it as much as I enjoyed coding it.</p>
                </Grid>
            </Grid>
        )
    }
}

const styles = {
    thanks:{
        color:'#3f51b5'
    },
    score:{
        textTransform:'uppercase',
        fontWeight:'bold',
        fontSize:26
    },
    text:{
        fontWeight:'bold'
    }
}
export default Results;
