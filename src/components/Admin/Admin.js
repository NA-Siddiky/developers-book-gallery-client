import React from 'react';
import { Link } from 'react-router-dom';
import AddBooks from '../AddBooks/AddBooks';
import { Route } from 'react-router-dom';
import ManageOrder from './ManageOrder';
import ManageProduct from './ManageProduct';
import "./Admin.css"

const Admin = () => {
	return (
		<div className="container">
			<h3>Select an option from the list to Add, Manage and More.</h3>
			<div className="row">
				<div className="col-md-4 adminSidebar">
					<Link to="/admin/addproduct">Add products</Link>
					<br />
					<Link to="/admin/manageorder">Manage Order</Link>
					<br />
					<Link to="/admin/manageproduct">Manage products</Link>
				</div>
				<div className="col-md-8">
					<Route path="/admin/addproduct">
						<AddBooks />
					</Route>
					<Route path="/admin/manageorder">
						<ManageOrder />
					</Route>
					<Route path="/admin/manageproduct">
						<ManageProduct />
					</Route>
				</div>
			</div>
		</div>
	);
};

export default Admin;
