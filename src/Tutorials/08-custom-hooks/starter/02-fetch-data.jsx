import useFetch from './useFetch';
const FetchCustomHook = () => {
	const url = 'https://api.github.com/users/QuincyLarson';
	const { isLoading, isError, user } = useFetch(url);

	if (isLoading) {
		return <h3>Loading...</h3>;
	}
	if (isError) {
		return <h3>network error</h3>;
	}

	const { avatar_url, bio, login, company } = user;

	return (
		<>
			<h2>Custom fetch hook</h2>
			<>
				<img
					src={avatar_url}
					style={{ width: '150px', borderRadius: '25px', objectFit: 'cover', margin:".5rem 0" }}
					alt={login}
					loading='lazy'
				/>
				<h2>{login}</h2>
				<h3>Work at {company}</h3>
				<p style={{fontSize:'14px', textAlign:'center'}}>{bio}</p>
			</>
		</>
	);
};

export default FetchCustomHook;
