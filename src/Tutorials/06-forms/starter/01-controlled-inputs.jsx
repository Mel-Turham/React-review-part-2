import { useState } from 'react';

const ControlledInputs = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');

	// const handleChangeName = (e) => {
	// 	setName(e.target.value);
	// };
	const handleOnsubmit = (e) => {
		e.preventDefault();
		console.log({
			name: name,
			email: email,
		});
		setName('');
		setEmail('');
	};
	return (
		<>
			<form className='form' onSubmit={handleOnsubmit}>
				<h2>Controlled inputs</h2>
				<div className='form-row'>
					<label htmlFor='name' className='form-label'>
						name
					</label>
					<input
						type='text'
						id='name'
						className='form-input'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className='form-row'>
					<label htmlFor='email' className='form-label'>
						Email
					</label>
					<input
						type='text'
						id='email'
						className='form-input'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<button type='submit' className='btn btn-block'>
					Submit
				</button>
			</form>
		</>
	);
};

export default ControlledInputs;
