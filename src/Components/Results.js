import React, { Component } from 'react';

class Results extends Component{
    render () {
        return (
            <div>{this.props.score}/{this.props.total}</div>
        )
    }
}

export default Results;
