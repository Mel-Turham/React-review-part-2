import { useState, createContext, useContext } from 'react';
import NavLinks from './NavLinks';

const NavbarContext = createContext();

// custom hook context

export const AppContext = () => useContext(NavbarContext);
const Navbar = () => {
	const [user, setUser] = useState({
		name: 'Mel',
	});

	const logout = () => {
		setUser(null);
	};
	return (
		<NavbarContext.Provider value={{ user, logout }}>
			<nav className='navbar'>
				<h5>context api</h5>
				<NavLinks />
			</nav>
		</NavbarContext.Provider>
	);
};
export default Navbar;
