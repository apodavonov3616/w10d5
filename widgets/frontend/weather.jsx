import React from 'react'

export default class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: "70 degrees"
        }
    }

    render() {
        return <div className='weather'>
            <h1>Weather</h1>
            <div>
                {this.state.temperature}
            </div>
        </div>
    }
}