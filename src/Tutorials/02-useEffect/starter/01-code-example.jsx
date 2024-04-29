import { useState } from 'react';

const CodeExample = () => {
	const [value, setValue] = useState(0);
  
  // this function will execute every time the component will re-render and went the component load the first time 

  // it's a bad thing or not ?

	// const sayHallo = () => {
	// 	console.log('Hello here');
  //   // be careful, i will have infinite loop
	// };

	// sayHallo();
	return (
		<>
			<h1>value : {value}</h1>
			<button
				className='btn'
				onClick={() => setValue((prevValue) => prevValue + 1)}
			>
				Click Me
			</button>
		</>
	);
};

export default CodeExample;
