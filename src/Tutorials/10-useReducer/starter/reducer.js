import { data } from '../../../../data';
export const reducer = (state, action) => {
	if (action.type === 'CLEAR_LIST') {
		return { ...state, users: [] };
	} else if (action.type === 'RESET_LIST') {
		return { ...state, users: data };
	} else if (action.type === 'REMOVE_ITEM') {
		const { id } = action.payload;
		console.log(id);
		const newUsers = state.users.filter((user) => user.id !== id);

		return { ...state, users: newUsers };
	}
};

