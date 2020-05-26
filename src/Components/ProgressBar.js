import React from 'react'

function Filler (props) {
    return <div className='filler' style={{ width: `${props.percentage}%`}}> </div>
}

function ProgressBar (props){
    return (
        <div className='progress-bar'>
            <Filler percentage={props.percentage} />
        </div>
    )
}


export default ProgressBar;

