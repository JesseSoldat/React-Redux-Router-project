import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { createStore, combineReducers } from 'redux';

import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import { Provider } from 'react-redux';

import App from './component/App';
import { Login } from './component/login/Login';

const likeReducer = (state = {
	results: 0,
	lastValues: []
}, action) => {
	switch (action.type) {
		case "LIKE":
			state = {
				...state,
				results: state.results+action.payload,
				lastValues: [...state.lastValues, action.payload]
			};
			break;
		case "DISLIKE":
			state = {
				...state,
				results: state.results - action.payload,
				lastValues: [...state.lastValues, action.payload]
			}
			break;
	}
	return state;
};

const store = createStore(
  combineReducers({
    likeReducer: likeReducer,
    routing: routerReducer
  })
)

store.subscribe( () => {
	console.log("Store Updated!", store.getState());
});


const history = syncHistoryWithStore(browserHistory, store);

render(
<Provider store={store}>
	<Router history={history}>
			<Route path="/login" component={Login} />
			<Route path="/" component={App}>
			</Route>
		
	</Router>
</Provider>



, document.getElementById('app'))