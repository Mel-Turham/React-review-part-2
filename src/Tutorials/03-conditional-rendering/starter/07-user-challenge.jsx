import { useState } from 'react';

const UserChallenge = () => {
	const [user, setUser] = useState(null);

	const handleOnLogin = () => {
    // normally connect to db or api 
		setUser({
			name: 'William',
		});
	};

	const handleOnLogout = () => {
		setUser(null);
	};

	return (
		<>
			<h1>User challenge</h1>

			{user ? <h4>Hello there , {user.name}</h4> : <h4>Please login </h4>}

			{user ? (
				<button type='button ' className='btn' onClick={handleOnLogout}>
					Logout
				</button>
			) : (
				<button type='button ' className='btn' onClick={handleOnLogin}>
					Login
				</button>
			)}
		</>
	);
};

export default UserChallenge;
