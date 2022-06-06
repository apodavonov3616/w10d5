import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';

document.addEventListener("DOMContentLoaded", () => {

	const panes = [
		{title: 'number1', content: 'number1 things'},
		{title: 'number2', content: 'number2 things'},
		{title: 'number3', content: 'number3 things'}
	]

	function Root() {
		return <div>
			<Clock/>
			<Tabs panes={panes}/>
			<Weather/>
		</div>
	}

	const root = document.getElementById("main");
	ReactDOM.render(<Root/>, root);
});
