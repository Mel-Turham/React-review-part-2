import { useState, useEffect } from 'react';

const MultipleReturnsFetchData = () => {
	const [user, setUser] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(null);

	useEffect(() => {
		const fetchDataUser = async () => {
			try {
				const url = 'https://api.github.com/users/QuincyLarson';
				const response = await fetch(url);
				if (!response.ok)
					throw new Error('Error fetching data', response.status);
				const userData = await response.json();
				setUser(userData);
			} catch (error) {
				console.log(error.message);
				setIsError(error.message);
			} finally {
				setIsLoading(false);
			}
		};
		fetchDataUser();
	}, []);

	if (isLoading) {
		return <h1>Loading...</h1>;
	}

	if (isError) {
		return <h1>{isError}</h1>;
	}

  // destructuring of user data
  // destructuring always after all the return 
	const { avatar_url, bio, login, company } = user;

	return (
		<>
			<h1>Fetch data</h1>
			<>
				<img
					src={avatar_url}
					style={{ width: '150px', borderRadius: '25px', objectFit: 'cover' }}
					alt={login}
				/>
				<h2>{login}</h2>
				<h3>Work at {company}</h3>
				<p>{bio}</p>
			</>
		</>
	);
};

export default MultipleReturnsFetchData;
