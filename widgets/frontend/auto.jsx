import React from 'react';

export default class AutoComplete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: ''
        }
        this.selectName = this.selectName.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }



    render() {
        <div>
            <h1>Autocomplete</h1>
            <input 
                onChange={this.handleInput}
                value={this.state.inputVal}
                placeholder='..'/>
            <ul>
            
            </ul>
        </div>
    }
}