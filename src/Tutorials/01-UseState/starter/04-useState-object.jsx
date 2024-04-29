import { useState } from 'react';

const UseStateObject = () => {
	const [person, setPerson] = useState({
		name: 'Peter',
		age: 30,
		hobby: 'Play a PlayStation 5',
	});

	const handleToggleUser = () => {
		// This setPerson below allows to update all the entire object person

		// setPerson({
		// 	name: 'John',
		// 	age: 40,
		// 	hobby: 'Love coding and lean new features',
		// });


		/*  
		this setPerson below allows to update one specific item in the object 

		example the name:'Peter' had been update by mel the rest of item on the object stay the same
		
		*/
		setPerson({
			...person,
			name: 'Mel',
		});
	};
	return (
		<>
			<h2>UseState object Example</h2>
			<div style={{ marginTop: '1rem' }}>
				<h3>Name: {person.name}</h3>
				<h4>Age: {person.age}</h4>
				<h5>Enjoys: {person.hobby}</h5>
			</div>
			<button onClick={handleToggleUser} type='button' className='btn'>
				Show /John
			</button>
		</>
	);
};

export default UseStateObject;
