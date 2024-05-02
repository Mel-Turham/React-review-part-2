import { useState } from 'react';
import { data } from '../../../../data';

const ReducerBasics = () => {
	const [users, setUsers] = useState(data);

	const handleOnclick = (id) => {
		const newUser = users.filter((user) => user.id !== id);

		setUsers(newUser);
	};

	const handleClear = () => {
		setUsers([]);
	};

	// reset button
	const handleReset = () => {
		setUsers(data);
	};
	return (
		<>
			<h2>useReducer basics</h2>
			{users.map((user) => {
				return (
					<div key={user.id}>
						<h3>{user.name}</h3>
						<button
							className='btn'
							type='button'
							onClick={() => handleOnclick(user.id)}
						>
							remove
						</button>
					</div>
				);
			})}

			{users.length ? (
				
        <button onClick={handleReset} className='btn' type='button'>
					Reset
				</button>
			) : (
				<button
					className='btn'
					type='button'
					role='button'
					onClick={handleClear}
				>
					Clear
				</button>
			)}
		</>
	);
};

export default ReducerBasics;
