import { useState, useTransition, lazy, Suspense } from 'react';
import useToggle from '../../../08-custom-hooks/starter/useToggle';
const SlowComponent = lazy(() => import('./SlowComponent'));
const LatestReact = () => {
	const [text, setText] = useState('');
	const [items, setItems] = useState([]);
	const [isPending, starTransition] = useTransition();
	const { toggle, handleToggle } = useToggle(false);
	const handleChange = (e) => {
		setText(e.target.value);
		// slow down cpu

		starTransition(() => {
			const newItems = Array.from({ length: 5000 }, (_, index) => {
				return (
					<div
						key={index}
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<img src='./vite.svg' alt='' />
					</div>
				);
			});

			setItems(newItems);
		});
	};

	return (
		<section style={{ width: '100%' }}>
			<form>
				<div className='form-row'>
					<input
						className='form-input'
						type='text'
						value={text}
						onChange={handleChange}
					/>
				</div>
			</form>
			<h4>items below</h4>
			{isPending ? (
				<h4>Loading...</h4>
			) : (
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: '1fr 1fr 1fr',
						marginTop: '2rem',
						placeContent: 'center',
						gap: '1rem',
					}}
				>
					{items}
				</div>
			)}
			<button type='button' className='btn' onClick={handleToggle}>
				Toggle
			</button>
			{toggle && (
				<Suspense fallback={<div>Loading...</div>}>
					<SlowComponent />
				</Suspense>
			)}
		</section>
	);
};

export default LatestReact;
