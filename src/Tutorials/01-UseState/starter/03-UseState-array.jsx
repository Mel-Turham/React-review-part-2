import { data } from './../../../../data';

import { useState } from 'react';

const UseStateArray = () => {
	const [listItem, setListItem] = useState(data);

	const handleOnClick = (id) => {

    // 1) First method to filter array in react

		// const newItems = listItem.filter((item) => item.id !== id);

    // 2) second way to filter array in react directly in the function that will update the array
    
		setListItem(listItem.filter((item) => item.id !== id));
	};

	const handleClearItem = () => {
		const confirmAction = confirm(
			'You want remove all items in the lists array?',
		);

		if (confirmAction && listItem.length > 0) {
			setListItem([]);
		}
	};

	return (
		<>
			<h1>UseState Array Example</h1>
			<ul>
				{listItem.map((item) => (
					<li key={item.id} className='list-item'>
						<p>{item.name}</p>
						<button
							type='button'
							className='btn'
							onClick={() => handleOnClick(item.id)}
						>
							Remove
						</button>
					</li>
				))}
			</ul>
			<button
				disabled={listItem.length === 0}
				className='btn'
				type='button'
				onClick={handleClearItem}
			>
				Clear
			</button>
		</>
	);
};

export default UseStateArray;
