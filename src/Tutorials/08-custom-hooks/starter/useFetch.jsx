import { useState, useEffect } from 'react';

const useFetch = (url) => {
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [user, setUser] = useState(null);

	useEffect(() => {
		const fetchUserInfo = async () => {
			try {
				const res = await fetch(url);
				if (!res) throw new Error('Data error fetching');
				const UserInfo = await res.json();
				setUser(UserInfo);
			} catch (error) {
				setIsError(true);
			} finally {
				setIsLoading(false);
			}
		};
		fetchUserInfo();
	}, []);

	return { isLoading, isError, user };
};

export default useFetch;
