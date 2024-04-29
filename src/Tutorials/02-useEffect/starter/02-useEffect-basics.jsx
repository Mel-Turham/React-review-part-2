import { useEffect, useState } from 'react';

const UseEffectBasics = () => {
	const [value, setValue] = useState(0);

	const sayHello = () => {
		console.log('SayHello function there');
	};
	sayHello();


  // The hook useEffect: allows us to make the site effect , manipulate directly the DOM, make the timer, fetching data, also went some value change in the component.

  /* 
  UseEffect take 2 parameters.

  1. The callBack function ()=>

  2.the dependencies  arrays []

  if the dependencies  array is empty the useEffect will render the first time the component load
    
  */
	useEffect(() => {
		console.log('usEffect there also!!!');
    // useEffect will render the first time because we have empty dependencies array 
	},[]);

	return (
		<>
			<h1>value : {value}</h1>
			<button
				className='btn'
				type='bnt'
				onClick={() => setValue((prevValue) => prevValue + 1)}
			>
				Increase
			</button>
		</>
	);
};

export default UseEffectBasics;
