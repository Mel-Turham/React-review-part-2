const UserContainer = () => {
	return <p>Hello world</p>;

	// return (
	// 	<div className='user-container'>
	// 		{user ? (
	// 			<>
	// 				<p style={{ fontSize: '13.4px' }}>
	// 					Hello There, {user?.name?.toUpperCase()}
	// 				</p>
	// 				<button type='button' onClick={logout} className='btn'>
	// 					{user?.name ? 'Logout' : 'Login'}
	// 				</button>
	// 			</>
	// 		) : (
	// 			<p style={{ fontSize: '13.4px' }}>Please Login</p>
	// 		)}
	// 	</div>
	// );
};
export default UserContainer;
