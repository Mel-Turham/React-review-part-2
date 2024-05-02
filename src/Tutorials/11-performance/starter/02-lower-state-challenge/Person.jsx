const Person = ({ name }) => {
  console.log('person re-render');
	return (
		<div>
			<h5>{name}</h5>
		</div>
	);
};
export default Person;
