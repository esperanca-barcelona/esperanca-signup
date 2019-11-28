import { combineReducers } from 'redux';

import googleSheet from './googleSheet';
import navigation from './navigation';
import form from './form';

const rootReducer = combineReducers({
	googleSheet,
	navigation,
	form
});

export default rootReducer;
