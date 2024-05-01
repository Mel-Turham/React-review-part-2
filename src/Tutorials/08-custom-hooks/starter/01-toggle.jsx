// import { useState } from 'react';
import useToggle from './useToggle';
const ToggleExample = () => {
	const { toggle, handleToggle } = useToggle(false);
	return (
		<>
			<h3>Toggle custom hook</h3>
			<button
				type='button'
				className='btn'
				onClick={handleToggle}
				style={{ margin: '1rem 0' }}
			>
				Toggle
			</button>
			{toggle && <h4>Some stuff</h4>}
		</>
	);
};
export default ToggleExample;
