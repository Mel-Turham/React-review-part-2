const Person = (props) => {
	console.log('render');
	const { name, id, removePerson } = props;

	return (
		<div>
			<h3>{name}</h3>
			<button onClick={() => removePerson(id)}>remove</button>
		</div>
	);
};
export default Person;
