

export default function navigation(state = {currentScreen:'HOME'}, action) {
	switch (action.type) {
		case 'GO_TO_DETAILS':
			return {
				...state,
				currentScreen: action.data
			};
		case 'GO_TO_HOME':
			return {
				...state,
				currentScreen: action.data
			};
		default:
			return state;
	}
}
