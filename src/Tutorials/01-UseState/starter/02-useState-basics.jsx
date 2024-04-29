import { useState } from 'react';

const UseStateBasics = () => {
	// console.log(useState(2));

	/*
  UseState has 2 values the value and the function.

  Syntax = const [value, function] = useState(initialState || initialValue).

  The value(Default value): is the first value of the state he can be an array, number , null, string and boolean

  The function(Function) : is the function that will update the value.

  */


  // Destructuring array 
	const [count, setCount] = useState(0);
  
  // Event onClick that will update the value of count
	const handleClick = () => {
		setCount(count + 1);
	};
	return (
		<>
			<h2>
				You clicked {count} {count >= 2 ? 'times' : 'time'}
			</h2>
			<button type='button' className='btn' onClick={handleClick}>
				Increase
			</button>
		</>
	);
};

export default UseStateBasics;
