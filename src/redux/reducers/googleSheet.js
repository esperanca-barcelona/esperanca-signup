export const initialState = {
	googleSheet: {}
};

export default function googleSheet(state = initialState, action) {
	switch (action.type) {
		case 'GET_GOOGLE_SHEET':
			return {
				...state,
				googleSheet: action.data
			};
		default:
			return state;
	}
}
