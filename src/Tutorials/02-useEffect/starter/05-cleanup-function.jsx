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
		// This timer bellow will once the component will unmount. In this case need the cleanup function it allows us to clean the function/ logic inside the useEffect hook. syntax: return () => { logic there}


		const intId = setInterval(() => {
			console.log('Hello from interval');
		}, 1000);
		console.log(intId);

		// cleanUp function
		return () => {
			clearInterval(intId);
		};
	}, []);

	return <h1>Second component</h1>;
};

export default CleanupFunction;
