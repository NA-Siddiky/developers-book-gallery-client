import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { BookContext } from '../Context/BookContext';
import OrderData from './OrderData';

const Orders = () => {
	const [orderData, setOrderData] = useState([]);
	const { user } = useContext(BookContext);
	useEffect(() => {
		const email = {
			email: user.email,
		};
		axios
			.post(`https://banana-surprise-70079.herokuapp.com/userorder`, email)
			.then((response) => setOrderData(response.data));
	}, [user]);
	return (
		<div className="container">
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
					</tr>
				</thead>
				<tbody>

					{orderData.map((order) => (
						<OrderData order={order} />
					))}

				</tbody>
			</Table>
		</div>
	);
};

export default Orders;
