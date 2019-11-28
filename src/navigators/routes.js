import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../screens/Home';
import Lists from '../screens/Lists';
import Thanks from '../screens/Thanks';

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/lists" component={Lists} />
			<Route exact path="/end" component={Thanks} />
		</Switch>
	);
};

export default Routes;
