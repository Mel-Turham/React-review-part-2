import { useReducer } from 'react';
import { data } from '../../../../data';
import { RESET_LIST, REMOVE_ITEM, CLEAR_LIST } from './actions';
import { reducer } from './reducer';
const defaultValue = {
	users: data,
};



const ReducerBasics = () => {
	// const [users, setUsers] = useState(data);
	const [state, dispatch] = useReducer(reducer, defaultValue);

	const handleOnclick = (id) => {
		// const newUser = users.filter((user) => user.id !== id);
		// setUsers(newUser);

		// first method
		// dispatch({ type: REMOVE_ITEM, id });

		// second method convention
		dispatch({ type: REMOVE_ITEM, payload: { id } });
	};

	const handleClear = () => {
		dispatch({ type: CLEAR_LIST });
	};

	// reset button
	const handleReset = () => {
		// setUsers(data);
		dispatch({ type: RESET_LIST });
	};

	console.log(state);
	return (
		<>
			<h2>useReducer basics</h2>
			{state.users.map((user) => {
				return (
					<div key={user.id}>
						<h3>{user.name}</h3>
						<button
							className='btn'
							type='button'
							onClick={() => handleOnclick(user.id)}
						>
							remove
						</button>
					</div>
				);
			})}

			{state.users.length === 0 ? (
				<button onClick={handleReset} className='btn' type='button'>
					Reset
				</button>
			) : (
				<button
					className='btn'
					type='button'
					role='button'
					onClick={handleClear}
				>
					Clear
				</button>
			)}
		</>
	);
};

export default ReducerBasics;
