import Person from './Person';
import { people } from '../../../../data';

const List = () => {
	return (
		<>
			<h1>Leverage javascript</h1>
			{people.map((person) => (
				<Person
					key={person.id}
					name={person.name}
					nickName={person.nickName}
					images={person.images}
				/>
			))}
		</>
	);
};
export default List;
