import { useState } from 'react';

const MultipleInputs = () => {
	const [userInfos, setUserInfos] = useState({
		name: '',
		email: '',
		password: '',
	});

	const handleOnsubmit = (e) => {
		e.preventDefault();
		console.log(userInfos);
		setUserInfos({
			name: '',
			email: '',
			password: '',
		});
		console.log('form submitted');
	};

	const handleChange = (e) => {
		setUserInfos({ ...userInfos, [e.target.name]: e.target.value });
	};

	return (
		<>
			<form className='form' onSubmit={handleOnsubmit}>
				<h2>Multiple inputs</h2>
				<div className='form-row'>
					<label htmlFor='name' className='form-label'>
						name
					</label>
					<input
						type='text'
						id='name'
						name='name'
						className='form-input'
						value={userInfos.name}
						onChange={handleChange}
					/>
				</div>
				<div className='form-row'>
					<label htmlFor='email' className='form-label'>
						email
					</label>
					<input
						type='email'
						id='email'
						name='email'
						className='form-input'
						value={userInfos.email}
						onChange={handleChange}
					/>
				</div>
				<div className='form-row'>
					<label htmlFor='password' className='form-label'>
						password
					</label>
					<input
						type='password'
						id='password'
						name='password'
						className='form-input'
						value={userInfos.password}
						onChange={handleChange}
					/>
				</div>
				<button
					disabled={
						userInfos.name && userInfos.email && userInfos.password
							? false
							: true
					}
					type='submit'
					className='btn btn-block'
				>
					Submit
				</button>
			</form>
		</>
	);
};

export default MultipleInputs;
