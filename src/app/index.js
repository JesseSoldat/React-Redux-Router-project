import firebase from 'firebase';
import config from './firebaseConfig';
firebase.initializeApp(config);

import React from 'react';
import { render } from 'react-dom';
//Router
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
//Redux
import { createStore, combineReducers } from 'redux';

import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import { Provider } from 'react-redux';

//Components
import App from './component/App';
import Login from './component/login/Login';
import { Register } from './component/login/Register';

import { Game } from './component/playNine/Game';

//Reducers
import likeReducer from './reducers/likeReducer';

const loginReducer = (state = {
	email: "",
	password: ""
}, action) => {
	switch (action.type) {
		case "LOGIN":
			state = {
				...state,
				email: action.payload.email,
				password: action.payload.password
			};
			break;
	}
	return state;
};

const store = createStore(
  combineReducers({
    likeReducer: likeReducer,
    loginReducer: loginReducer,
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
			<Route path="/register" component={Register} />
			<Route path="/" component={App}>
			</Route>	
			<Route path="/game" component={Game}/>
	</Router>
</Provider>



, document.getElementById('app'))