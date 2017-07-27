import React, { Component } from 'react';
import componentFactory from './componentFactory';

const data = {
	id: 'A',
	name: 'A'
};

class App extends Component {
	render() {
		const selectedComponent = componentFactory(data.id, data.name);

		return (
			<div>
				{selectedComponent}
			</div>
		);
	}
}

module.exports = App;
