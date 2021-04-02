import React, { useContext, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../firebase.config';
import { BookContext } from '../Context/BookContext';
import { useHistory, useLocation } from 'react-router';
import { FcGoogle } from 'react-icons/fc';
import "./Login.css"

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
			<div className="d-flex flex-column align-items-center mt-5"> 

				<button onClick={handleSignIn} className="btn googleBtn">
					<h4><FcGoogle /> Press google icon to Login</h4>
				</button>
			</div>
		</div>
	);
};

export default Login;
