import { useState } from 'react';

const Counter = () => {
	const [count, setCount] = useState(0);
	return (
		<button
			style={{ marginBottom: '1rem' }}
			className='btn'
			onClick={() => setCount((prevCount) => prevCount + 1)}
		>
			count : {count}
		</button>
	);
};
export default Counter;
