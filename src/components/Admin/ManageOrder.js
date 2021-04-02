import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import OrderData from '../Orders/OrderData';

function ManageOrder() {
	const [orders, setOrder] = useState([]);
	useEffect(() => {
		axios.get(`https://banana-surprise-70079.herokuapp.com/getorder`).then((response) => {
			setOrder(response.data);
		});
	}, []);
	const deleteOrder = (id) => {
		axios.delete(`https://banana-surprise-70079.herokuapp.com/deleteorder/${id}`).then((res) => {
			toast.warning('Deleted Successfully');
			history.push('/admin/manageorder/')
		});
	};

	const history = useHistory();

	return (
		<div>
			<h2>Manage your orders.</h2>
			<Table striped bordered hover size="sm">
				<thead>
					<tr>
						<th>Date</th>
						<th>Book Name</th>
						<th>Author Name</th>
						<th>Quantity</th>
						<th>User Email Address</th>
						<th>Price</th>
						<th>Confirm Order</th>
						<th>Delete Order</th>
					</tr>
				</thead>
				<tbody>

					{orders.map((order, index) => (
						<OrderData key={index} order={order}>
							<td><button
								className="btn-danger btn"
								onClick={() => deleteOrder(order._id)}
							>
								Delete
					</button></td>
						</OrderData>
					))}

				</tbody>
			</Table>

		</div>
	);
}

export default ManageOrder;
