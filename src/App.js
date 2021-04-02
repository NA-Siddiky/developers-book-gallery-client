import React from 'react';
import "./App.css"
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Admin from './components/Admin/Admin';
import Deals from './components/Deals/Deals';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import AddBooks from './components/AddBooks/AddBooks';
import Header from './components/Header/Header';
import Checkout from './components/Checkout/Checkout';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { ToastContainer } from 'react-toastify';
function App() {
	return (
		<div>
			<ToastContainer />
			<Router>
				<Header />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<PrivateRoute path="/orders">
						<Orders />
					</PrivateRoute>

					<PrivateRoute path="/checkout/:id">
						<Checkout />
					</PrivateRoute>

					<PrivateRoute path="/addBooks">
						<AddBooks />
					</PrivateRoute>

					<PrivateRoute path="/admin">
						<Admin />
					</PrivateRoute>

					<Route path="/deals">
						<Deals />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
