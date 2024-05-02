const Person = (props) => {
	console.log('render');
	const { name } = props;
  
	return <h3>{name}</h3>;
};
export default Person;
