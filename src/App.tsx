import React from 'react';

import { Routes } from './Routes';

import { ToastContainer } from 'react-toastify';
import './App.scss';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
	return (
		<>
			<Routes />
			<ToastContainer />
		</>
	);
};

export default App;
