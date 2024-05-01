import { useState } from 'react';
import NavLinks from './NavLinks';

const Navbar = () => {
	const [user, setUser] = useState({
		name: 'Mel',
	});

	const logout = () => {
		setUser(null);
	};
	return (
		<nav className='navbar'>
			<h5>context api</h5>
			<NavLinks
				user={user}
				logout={logout}
			/>
		</nav>
	);
};
export default Navbar;
