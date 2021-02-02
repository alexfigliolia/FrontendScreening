import React from 'react';

import { Routes } from './Routes';
import { Route, Switch } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import './App.scss';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
	return (
		<>
			<Switch>
				<Route component={Routes} />
			</Switch>
			<ToastContainer />
		</>
	);
};

export default App;
