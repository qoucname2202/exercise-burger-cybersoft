import React from 'react';
import ReactDOM from 'react-dom/client';
// connect store redux
import { Provider } from 'react-redux';
import { store } from './redux/configStore.jsx';
import ExerciseBurger from './components/ExerciseBurger';
// file css global
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<ExerciseBurger />
	</Provider>,
);
