import React, { useContext, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../firebase.config';
import { BookContext } from '../Context/BookContext';
import { useHistory, useLocation } from 'react-router';

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

const Login = () => {
	const { user, setUser } = useContext(BookContext);

	const provider = new firebase.auth.GoogleAuthProvider();
	const history = useHistory();
	const location = useLocation();
	const { from } = location.state || { from: { pathname: '/' } };

	const handleSignIn = () => {
		firebase
			.auth()
			.signInWithPopup(provider)
			.then((result) => {
				const { displayName, email } = result.user;
				const signedInUser = {
					isSignedIn: true,
					name: displayName,
					email: email,
				};
				setUser(signedInUser);
				history.replace(from);
			})
			.catch((error) => {
				console.log(error);
				console.log(error.message);
			});
	};

	const handleSignOut = () => {
		console.log('Sign out clicked');
		firebase
			.auth()
			.signOut()
			.then((res) => {
				const signedOutUser = {
					isSignedIn: false,
					name: '',
				};
				setUser(signedOutUser);
				// console.log(res);
			})
			.catch((error) => {
				console.log('Error:', error);
				console.log('Error Message:', error.message);
			});
	};

	return (
		<div>
			<h1>This is login</h1>
			{user.isSignedIn ? (
				<button onClick={handleSignOut}>Sign Out</button>
			) : (
				<button onClick={handleSignIn}>Sign In</button>
			)}
			{user.isSignedIn && <h3>Welcome, {user.name}</h3>}
		</div>
	);
};

export default Login;
