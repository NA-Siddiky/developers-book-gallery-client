import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
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
			.post(`http://localhost:5000/userorder`, email)
			.then((response) => setOrderData(response.data));
	}, [user]);
	return (
		<div className="d-flex">
			{orderData.map((order) => (
				<OrderData order={order} />
			))}
		</div>
	);
};

export default Orders;
