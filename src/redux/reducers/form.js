const initialState = {
	date: {},
	place: '',
	delivery: '',
	cooking: '',
	donate: '',
	name: '',
	email: '',
	phone: ''
};

export default function form(state = initialState, action) {
	switch (action.type) {
		case 'SET_DETAILS':
			return {
				...state,
				date: action.date,
				place: action.place
			};
		case 'REMOVE_LIST':
			return initialState;
		case 'SET_OTHERS':
			return {
				...state,
				delivery: action.selectedDeliveryItem,
				cooking: action.selectedCookingItem,
				donate: action.selectedDonateItem,
				name: action.name,
				email: action.email,
				phone: action.phone
			};
		default:
			return state;
	}
}
