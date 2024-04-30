import { useEffect, useState } from 'react';

const CleanupFunction = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<>
			{toggle && <SimpleComponent />}
			<button
				type='button'
				className='btn'
				onClick={() => setToggle((prevToggle) => !prevToggle)}
			>
				Toggle
			</button>
		</>
	);
};

const SimpleComponent = () => {
	useEffect(() => {
		console.log('Second component');
	}, []);

	return <h1>Second component</h1>;
};

export default CleanupFunction;
