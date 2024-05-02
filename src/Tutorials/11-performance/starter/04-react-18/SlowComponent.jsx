import { useState } from 'react';
import useToggle from './../../../08-custom-hooks/starter/useToggle';

const newItems = Array.from({ length: 5000 }, (_, index) => {
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
			key={index}
		>
			<img src='./vite.svg' alt='vite image' loading='lazy' />
		</div>
	);
});
const SlowComponent = () => {
	const [items, setItems] = useState(newItems);

	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: '1fr 1fr 1fr',
				marginTop: '2rem',
				placeContent: 'center',
				gap: '1rem',
			}}
		>
			{items}
		</div>
	);
};

export default SlowComponent;
