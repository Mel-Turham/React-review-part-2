// we can control the form without state hook this is the example bellow.

const FormDataApi = () => {
	const handleOnsubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		// console.log(formData);
		// const email = formData.get('email');
		// console.log(email);
		// console.log([...formData.entries()]);
		const newUser = Object.fromEntries(formData);
		console.log(newUser);
		e.currentTarget.reset();
	};
	return (
		<form className='form' onSubmit={handleOnsubmit}>
			<h2>Form data api</h2>
			<div className='form-row'>
				<label htmlFor='name' className='form-label'>
					name
				</label>
				<input
					type='text'
					name='name'
					id='name'
					className='form-input'
					autoComplete='off'
				/>
			</div>
			<div className='form-row'>
				<label htmlFor='email' className='form-label'>
					email
				</label>
				<input
					type='email'
					name='email'
					id='email'
					autoComplete='off'
					className='form-input'
				/>
			</div>
			<div className='form-row'>
				<label htmlFor='password' className='form-label'>
					password
				</label>
				<input
					type='password'
					name='password'
					id='password'
					className='form-input'
				/>
			</div>

			<button type='submit' className='btn btn-block'>
				Submit
			</button>
		</form>
	);
};

export default FormDataApi;
