import { useEffect, useState } from 'react';

const MultipleEffects = () => {
	const [value, setValue] = useState(0);
	const [secondValue, setSecondValue] = useState(0);


  //  we can have multiples useEffects in ours components depend of use case.

	useEffect(() => {
		console.log('Hello from first Effect');
    // the logic inside the callback ()=> should re-render went the value change

    // [0] ==> [1] the useEffect will re-render
	}, [value]);
	useEffect(() => {
		console.log('Hello from second Effect');

    // the logic inside the callback ()=> should re-render went the secondValue change

    // [0] ==> [1] the useEffect will re-render
	}, [secondValue]);

	return (
		<>
			<h1>Value : {value}</h1>
			<button
				className='btn'
				type='button'
				onClick={() => setValue((prevValue) => prevValue + 1)}
			>
				Value
			</button>
			<h1>Second Value : {secondValue}</h1>
			<button
				className='btn'
				type='button'
				onClick={() => setSecondValue((prevSecondValue) => prevSecondValue + 1)}
			>
				{' '}
				Second Value
			</button>
		</>
	);
};

export default MultipleEffects;
