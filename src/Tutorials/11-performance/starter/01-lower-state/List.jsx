import Person from './Person';

export function List({ people }) {
	return (
		<div>
			{people.map((person) => (
				<Person key={person.id} {...person} />
			))}
		</div>
	);
}
