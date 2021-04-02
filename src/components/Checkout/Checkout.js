import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { BookContext } from '../Context/BookContext';
import { toast } from 'react-toastify';

const Checkout = () => {
	const { user } = useContext(BookContext);
	const { id } = useParams();
	const [book, setBook] = useState({});
	const { name, author, price, url } = book;

	const { email } = user;
	useEffect(() => {
		fetch(`https://banana-surprise-70079.herokuapp.com/checkout/${id}`)
			.then((response) => response.json())
			.then((data) => setBook(data[0]));
	}, [id]);

	const history = useHistory();

	const checkoutBtn = () => {
		const orderInfo = {
			bookName: name,
			author: author,
			price: price,
			email: email,
			quantity: 1,
			imgUrl: url,
			date: new Date(),
		};
		// console.log(orderInfo);
		axios.post(`https://banana-surprise-70079.herokuapp.com/saveorder`, orderInfo).then((res) => {
			// console.log(res);
			toast.success('Checkout Successfully');
			history.push("/")
		});
	};
	return (
		<div className="container">
			<h1>Let's Checkout</h1>
			<div className="row">
				<div className="col-md-8">
					<Table striped bordered hover size="sm">
						<thead>
							<tr>
								<th>Sl</th>
								<th>Discription</th>
								<th>Quentity</th>
								<th>Price</th>
								<th>Confirm Checkout</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>{book.name}</td>
								<td>1</td>
								<td>{book.price}</td>
								<td><Link to path="/"> <button className="btn-primary btn" onClick={checkoutBtn}>Confirm</button> </Link></td>
							</tr>
						</tbody>
					</Table>
				</div>

				<div className="col-md-4">
					<img style={{ width: '200px' }} src={book.url} alt="" />
					<h5>{book.name}</h5>
					<h6>Author: {book.author}</h6>
					<h5>Price: ৳{book.price}</h5>
					<h3>Please confirm your Order.</h3>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
