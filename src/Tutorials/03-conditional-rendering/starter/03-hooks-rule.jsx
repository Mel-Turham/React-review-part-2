// import { useState, useEffect } from 'react';

// Don't call hook conditionally

const Example = () => {
	// const [condition, setCondition] = useState(true);

	// if (condition) {
	// won't work
	// this won't work because we can't put useState hook in the if statement
	// const [condition, setCondition] = useState(false);
	// }
	//  Don't useEffect after a condition
	// if (condition) {
	// return <h1>Hello there</h1>;
	// }
	// this will also fail
	// useEffect(()=> {
	//   console.log('Hello useEffect');
	// }, [])

	return <h1>Example</h1>;
};

export default Example;
