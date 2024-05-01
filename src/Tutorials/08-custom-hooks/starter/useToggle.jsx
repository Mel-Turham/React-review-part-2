import { useState } from 'react';

const useToggle = (defaultValue) => {
	const [toggle, setToggle] = useState(defaultValue);

	const handleToggle = () => {
		setToggle((prevToggle) => !prevToggle);
	};

	return { toggle, handleToggle };
};

export default useToggle;
