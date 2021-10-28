import React, {Component} from 'react';

function time(){

    const date = new Date()
    const hours = date.getHours()

    let timeOfDay

    if (hours < 12){
        timeOfDay = "morning"
    }
    else if (hours >= 1 && hours < 17){
        timeOfDay = "afternoon"
    }
    else{
        timeOfDay =  "night"
    }
    return <h1>Good {timeOfDay} !</h1>
}

class Time extends Component {
    render() {
        return (
            <div>
                <h1>
                    {time()}
                </h1>
            </div>
        );
    }
}

export default Time;

