import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';

firebase.initializeApp(firebaseConfig)

const Login = () => {
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
    })

    const provider = new firebase.auth.GoogleAuthProvider();

    const handleSignIn = () => {
        console.log('Sign In clicked');
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const { displayName, email } = result.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                }
                setUser(signedInUser);
                console.log(displayName);
            })
            .catch(error => {
                console.log(error);
                console.log(error.message);
            })
    }

    const handleSignOut = () => {
        console.log('Sign out clicked');
        firebase.auth().signOut()
            .then(res => {
                const signedOutUser = {
                    isSignedIn: false,
                    name: '',
                }
                setUser(signedOutUser);
                // console.log(res);
            })
            .catch(error => {
                console.log('Error:', error);
                console.log('Error Message:', error.message);
            });
    }

    return (
        <div>
            <h1>This is login</h1>
            {
                user.isSignedIn
                    ? <button onClick={handleSignOut}>Sign Out</button>
                    : <button onClick={handleSignIn}>Sign In</button>
            }
            {
                user.isSignedIn && <h3>Welcome, {user.name}</h3>
            }
        </div>
    );
};

export default Login;