import List from './List';
import { useState, useCallback } from 'react';
import { data } from '../../../../../data';

const LowerStateMemo = () => {
	const [count, setCount] = useState(0);
	const [people, setPeople] = useState(data);

	// const removePerson = (id) => {
	// 	const newPeople = people.filter((person) => person.id !== id);

	// 	setPeople(newPeople);
	// };

	const removePerson = useCallback(
		(id) => {
			const newPeople = people.filter((person) => person.id !== id);
			setPeople(newPeople);
		},
		[people],
	);

	return (
		<section>
			<button
				style={{ marginBottom: '1rem' }}
				className='btn'
				onClick={() => setCount((prevCount) => prevCount + 1)}
			>
				count : {count}
			</button>
			<List people={people} removePerson={removePerson} />
		</section>
	);
};

export default LowerStateMemo;
