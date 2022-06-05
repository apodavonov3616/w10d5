import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';

document.addEventListener("DOMContentLoaded", () => {

	function Root() {
		return <div>
			<Clock/>
		</div>
	}

	const root = document.getElementById("main");
	ReactDOM.render(<Root/>, root);
});
