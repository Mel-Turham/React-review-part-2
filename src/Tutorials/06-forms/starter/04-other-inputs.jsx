import { useState } from 'react';

const frameworks = ['react', 'svelte', 'angular', 'vue'];

const OtherInputs = () => {
	const [shipping, setShipping] = useState(false);

	const [framework, setFramework] = useState('react');

	const handleChecked = (e) => {
		// console.log(e.target.checked);
		setShipping(e.target.checked);
	};

	const handleFramework = (e) => {
		setFramework(e.target.value);
		console.log(e.target.value);
	};
	return (
		<>
			<form className='form'>
				<h2>other inputs</h2>
				{/* names */}
				<div className='form-row'>
					<label htmlFor='shipping' className='form-label'>
						Free Shipping
						<input
							type='checkbox'
							name='shipping'
							id='shipping'
							onChange={handleChecked}
							checked={shipping}
						/>
					</label>
				</div>
				<div className='form-row'>
					<label htmlFor='framework' className='form-label'>
						Framework
					</label>
					<select
						name='framework'
						id='framework'
						value={framework}
						onChange={handleFramework}
					>
						{frameworks.map((framework) => {
							return <option key={framework}>{framework}</option>;
						})}
					</select>
				</div>
				<button type='submit' className='btn btn-block'>
					Submit
				</button>
			</form>
		</>
	);
};

export default OtherInputs;
