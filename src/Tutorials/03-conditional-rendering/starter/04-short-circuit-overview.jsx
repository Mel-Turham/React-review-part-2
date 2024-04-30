import { useState } from 'react';

const ShortCircuitOverview = () => {
	// falsy value : text
	const [text, setText] = useState('');
	// truthy value : name
	const [name, setName] = useState('susan');

	return (
		<>
			<h1>Short circuit overview</h1>
			{/* the tag below will return susan because the OR operator check the first truthy value and return it.

      In this case name it's truthy value.
      */}
			<h2>Falsy OR : {text || 'Hello world'}</h2>
			<h2>Falsy AND : {text && 'Hello World'}</h2>
			<h2>Truthy OR : {name || 'Hello world'}</h2>
			<h2>Truthy AND : {name && 'Hello world'}</h2>
		</>
	);
};

export default ShortCircuitOverview;
