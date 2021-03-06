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

    componentDidMount() {
        this.intervalId = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        let hours = this.state.time.getHours();
        let minutes = this.state.time.getMinutes();
        let seconds = this.state.time.getSeconds();

        hours = (hours < 10) ? `0${hours}` : hours;
        minutes = (minutes < 10) ? `0${minutes}` : minutes;
        seconds = (seconds < 10) ? `0${seconds}` : seconds;

        return <div className='clock'>
            <h2>My clock</h2>
            <p>
                <span>Time:</span>
                <span>
                    {hours}:{minutes}:{seconds}
                </span>
            </p>
            <p>
                <span>Date:</span>
                <span>
                    {this.state.time.toDateString()}
                </span>
            </p>
        </div>
    }
}