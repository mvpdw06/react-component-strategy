import React from 'react';

import A from './boilerplates/Ａ';
import B from './boilerplates/B';
import C from './boilerplates/C';
import D from './boilerplates/D';

const componentFactory = (key, data) => {
	switch (key) {
		case 'A':
			return <A name={data} />;
		case 'B':
			return <B name={data} />;
		case 'C':
			return <C name={data} />;
		case 'D':
			return <D name={data} />;
		default:
			return null;
	}
};

module.exports = componentFactory;
