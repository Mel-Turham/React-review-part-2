import { useState } from 'react';
import { data } from '../../../../data';
const UserChallenge = () => {
	const [users, setUser] = useState(data);
	const [name, setName] = useState('');

	const handleOnsubmit = (e) => {
		e.preventDefault();
		if (name.length === 0) {
			alert('The input should not be empty');
			return;
		}

		const fakeId = Date.now();
		const newUser = { id: fakeId, name: name };
		setUser([...users, newUser]);
		setName('');
	};

	const handleOnclick = (id) => {
		const newUsers = users.filter((user) => user.id !== id);
		setUser(newUsers);
	};

	return (
		<>
			<form className='from' onSubmit={handleOnsubmit}>
				<h2>Add user</h2>
				<div className='form-row'>
					<label htmlFor='name' className='form-label'>
						Name
					</label>
					<input
						type='text'
						id='name'
						className='form-input'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<button type='submit' className='btn btn-block'>
					Submit
				</button>
			</form>
			{users.length ? (
				<>
					{users.map((user) => {
						return (
							<div
								key={user.id}
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'space-between',
									width: '70%',
								}}
							>
								<p>{user.name}</p>
								<button
									type='btn'
									className='btn'
									onClick={() => handleOnclick(user.id)}
								>
									Remove
								</button>
							</div>
						);
					})}
				</>
			) : (
				<h4>Not users </h4>
			)}
		</>
	);
};

export default UserChallenge;
