import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Book from './Book';

function ManageProduct() {
	const [books, setBooks] = useState([]);
	useEffect(() => {
		axios.get(`http://localhost:5000/books`).then((response) => {
			setBooks(response.data);
		});
	}, []);
	const deleteBook = (id) => {
		axios.delete(`http://localhost:5000/deletebook/${id}`).then((res) => {
			console.log(res);
		});
	};
	return (
		<div className="d-flex flex-wrap">
			{books.map((book) => (
				<Book book={book} deleteBook={deleteBook} />
			))}
		</div>
	);
}

export default ManageProduct;
