import React from 'react';

export default class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            time: new Date()
        };
        this.tick = this.tick.bind(this)
    }

    tick() {
        this.setState({time: new Date()})
    }

    render() {
        let hours = this.state.time.getHours();
        let minutes = this.state.time.getMinutes();
        let seconds = this.state.seconds.getSeconds();

        hours = (hours < 10) ? `0${hours}` : hours;
        minutes = (minutes < 10) ? `0${minutes}` : minutes;
        seconds = (seconds < 10) ? `0${seconds}` : seconds;

        return <div>
            <h1>My clock</h1>
            <div>
                <h2>Time:</h2>
                <div>
                    {hours}:{minutes}:{seconds}
                </div>
            </div>
        </div>
    }
}