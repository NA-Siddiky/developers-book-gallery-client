import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { BookContext } from '../Context/BookContext';
function PrivateRoute({ children, ...rest }) {
	const { user } = useContext(BookContext);
	const { isSignedIn } = user;
	return (
		<Route
			{...rest}
			render={({ location }) =>
				isSignedIn ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
}

export default PrivateRoute;
