import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { BookContext } from '../Context/BookContext';

const Checkout = () => {
	const { user } = useContext(BookContext);
	const { id } = useParams();
	const [book, setBook] = useState({});
	const { name, author, price, url } = book;

	const { email } = user;
	useEffect(() => {
		fetch(`http://localhost:5000/checkout/${id}`)
			.then((response) => response.json())
			.then((data) => setBook(data[0]));
	}, [id]);

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
		axios.post(`http://localhost:5000/saveorder`, orderInfo).then((res) => {
			console.log(res);
		});
	};
	return (
		<div>
			<h1>This is Checkout</h1>
			{/* <p>{book}</p> */}
			{book.name}
			<div>
				<h4>name:- {book.name}</h4>
				<h4>Author{book.author}</h4>
				<h4>Price:- ${book.price}</h4>
				<button className="btn-primary btn" onClick={checkoutBtn}>
					Checkout
				</button>
			</div>
		</div>
	);
};

export default Checkout;
