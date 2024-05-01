import { AppContext } from './Navbar';

const UserContainer = () => {
	const { user, logout } = AppContext();

	return (
		<div className='user-container'>
			{user ? (
				<>
					<p style={{ fontSize: '13.4px' }}>
						Hello There, {user?.name?.toUpperCase()}
					</p>
					<button type='button' onClick={logout} className='btn'>
						Login
					</button>
				</>
			) : (
				<p style={{ fontSize: '13.4px' }}>Please Login</p>
			)}
		</div>
	);
};
export default UserContainer;
