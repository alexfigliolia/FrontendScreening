import React from 'react';

import { Route, Switch } from 'react-router-dom';

import * as Pages from 'Pages';
import { RouteNames } from './RouteNames';

export const Routes: React.FC = () => {
	return (
		<Switch>
			<Route path={RouteNames.home} exact component={Pages.HelloPage} />
			<Route path={RouteNames.form} component={Pages.FormPage} />
			<Route component={Pages.Page404} />
		</Switch>
	);
};
