import { useState, useEffect, useRef } from 'react';

// useRef DOES NOT TRIGGER RE_RENDER
// preserves the value between renders
// target DOM nodes/elements

const UserRefBasics = () => {
	const [value, setValue] = useState(0);
	const refContainer = useRef(null);
	const isMounted = useRef(false);
	// useEffect(() => {
	// 	console.log(refContainer);
	// }, []);

	useEffect(() => {
		if (!isMounted.current) {
			isMounted.current = true;
			return;
		}
		console.log('re-render');
	}, []);

	useEffect(() => {
		refContainer.current.focus();
	}, []);

	// useRef allows us to uncontrolled the form state
	const handleOnsubmit = (e) => {
		e.preventDefault();
		const name = refContainer.current.value;
		if (!name) {
      alert('the field will be not empty');
			return;
		}
    refContainer.current.value = '';
		console.log(name.trim());
	};

	const handleOnclick = () => {
		setValue((prevValue) => prevValue + 1);
	};
	return (
		<>
			<form className='form' onSubmit={handleOnsubmit}>
				<h3>UseRef basics</h3>
				<div className='form-row'>
					<label htmlFor='name' className='form-label'>
						name
					</label>
					<input
						ref={refContainer}
						type='text'
						name='name'
						id='name'
						autoComplete='off'
						className='form-input'
					/>
				</div>
				<button type='submit' className='btn btn-block'>
					Submit
				</button>
			</form>
			<h1>{value}</h1>
			<button type='button' className='btn' onClick={handleOnclick}>
				increase
			</button>
		</>
	);
};

export default UserRefBasics;
