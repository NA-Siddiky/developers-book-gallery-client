import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BookContext } from '../Context/BookContext';
// import './Header.css'
import firebase from 'firebase/app';
import 'firebase/auth';

const Header = () => {
	const { user, setUser } = useContext(BookContext);
	const { isSignedIn, name } = user;

	const handleSignOut = () => {
		// console.log('Sign out clicked');
		firebase
			.auth()
			.signOut()
			.then((res) => {
				const signedOutUser = {
					isSignedIn: false,
					name: '',
					email: '',
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
		<div className="navbar navbar-expand-lg  container Header">
			<div className="container-fluid">
				<Link className="navbar-brand brandName" to="/">
					<h4>Developers Book Gallery</h4>
				</Link>
				<div
					className=" navbar-collapse justify-content-end"
					id="navbarSupportedContent"
				>
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" to="/">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/orders">
								Orders
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/admin/addproduct">
								Admin
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/deals">
								Deals
							</Link>
						</li>

						{isSignedIn ? (
							<>
								<li className="nav-item">
									<p>{name}</p>
								</li>
								<li className="nav-item">
									<button className="btn btn-primary" onClick={handleSignOut}>
										Logout
									</button>
								</li>
							</>
						) : (
							<Link className="nav-link" to="/login">
								Login
							</Link>
						)}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;
