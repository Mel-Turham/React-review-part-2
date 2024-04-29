import { useEffect, useState } from 'react';

const UseEffectFetchUser = () => {
	const [users, setUsers] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const url = 'https://api.github.com/users';
				const response = await fetch(url);
				if (!response.ok)
					throw new Error('Error fetching data or network error ');
				const data = await response.json();
				console.log(data);
				setUsers(data);
			} catch (error) {
				console.error('Error fetching data', error);
				setError(error.message);
			}
		};
		fetchUsers();
	}, []);

	if (error) {
		return <h3>{error}</h3>;
	}

	return (
		<>
			<h1>Fetch data Example </h1>
			<h2>Github users</h2>
      <div className="users-container">
			{users.map((user) => (
				<div className='card-user' key={user.id}>
					<img src={user.avatar_url} alt='' loading='lazy' />
					<div className='user-info'>
						<h3>{user.login}</h3>
						<a href={user.html_url} target='_blank'>Profile</a>
					</div>
				</div>
			))}
      </div>
		</>
	);
};

export default UseEffectFetchUser;
