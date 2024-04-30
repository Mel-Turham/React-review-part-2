import { useState } from 'react';

const ToggleChallenge = () => {
	const [toggle, setToggle] = useState(false);
	console.log(toggle);

	return (
		<>
			<h1>Toggle challenge</h1>

			{toggle && <SomeComponent />}
			<button
				type='button'
				className='btn'
				onClick={() => setToggle((prevToggle) => !prevToggle)}
			>
				{toggle ? 'Hide components' : ' show component'}
			</button>
		</>
	);
};

const SomeComponent = () => {
	return (
		<>
			<h1>Hello component there👋</h1>
		</>
	);
};

export default ToggleChallenge;
