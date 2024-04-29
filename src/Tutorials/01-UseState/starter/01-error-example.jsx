const ErrorExample = () => {
	let count = 0;
	const handleOnclick = () => {
		count = count + 1;
		console.log(count);
	};
	return (
		<>
			<h1>UseState Error Example</h1>
			<h2>{count}</h2>
			<button className='btn' onClick={handleOnclick}>
				Add count
			</button>
		</>
	);
};

export default ErrorExample;
