import { useState } from 'react';
import { data } from '../../../../../data';
import List from './List';
import Form from './Form';

const LowerStateChallenge = () => {
	const [people, setPeople] = useState(data);
	const addPerson = (name) => {
		const fakeId = new Date().getSeconds();
		const newPerson = { id: fakeId, name };
		setPeople([...people, newPerson]);
	};
	return (
		<>
			<Form addPerson={addPerson} />
			<div style={{width:'100%'}}>
				<List people={people} />
			</div>
		</>
	);
};

export default LowerStateChallenge;
