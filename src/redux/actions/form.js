export const addDatePlacetoList = (date, place) => (dispatch) => {
	dispatch({ type: 'SET_DETAILS', date, place });
};
export function addOtherstoList(selectedDeliveryItem, selectedCookingItem, selectedDonateItem, name, email, phone) {
	return async (dispatch) => {
		await dispatch({
			type: 'SET_OTHERS',
			selectedDeliveryItem,
			selectedCookingItem,
			selectedDonateItem,
			name,
			email,
			phone
		});
		dispatch(sendForm());
	};
}
export const removeList = () => (dispatch) => {
	dispatch({ type: 'REMOVE_LIST' });
};

export const sendForm = () => (dispatch) => {
	console.log('Send');
};
