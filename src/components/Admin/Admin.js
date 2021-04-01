import React from 'react';
import { Link } from 'react-router-dom';
import AddBooks from '../AddBooks/AddBooks';
import { Route } from 'react-router-dom';
import ManageOrder from './ManageOrder';
import ManageProduct from './ManageProduct';

const Admin = () => {
	return (
		<div className="container">
			<h1>Please Add your Product</h1>
			<div className="row">
				<div className="col-md-4">
					<Link to="/admin/addproduct">Add products</Link>
					<Link to="/admin/manageorder">Manage Order</Link>
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
