import React from 'react';

class Headers extends React.Component {
    render() {
        const selected = this.props.selectedPane;
        const headers = this.props.panes.map((pane, index) => {
            const title = pane.title;
            const klass = index === selected ? 'active' : '';

            return (
                <li key={index}
                    className = {klass}
                    onClick={() => this.props.onTabChosen(index)}>
                        {title}
                </li>
            )
        })
        return (
            <ul className = 'tab-header'>
                {headers} 
            </ul>
        )
    }
}

export default class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPane: 0
        };
        this.selectTab = this.selectTab.bind(this);
    };

    selectTab(num) {
        this.setState({selectedPane: num})
    }

    render(){
        let pane = this.props.panes[this.state.selectedPane]

        return <div className='tabs'>
            <h1>Tabs</h1>
                <Headers 
                selectedPane = {this.state.selectedPane}
                onTabChosen= {this.selectTab}
                panes = {this.props.panes}>
                </Headers>
                <div className="tab-content">
                <article>
                    {pane.content}
                </article>
                </div>
                <br />
        </div>
       
    };


}

