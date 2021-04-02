import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Book from './Book';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router';

function ManageProduct() {
	const [books, setBooks] = useState([]);
	useEffect(() => {
		axios.get(`https://banana-surprise-70079.herokuapp.com/books`).then((response) => {
			setBooks(response.data);
		});
	}, []);
	const deleteBook = (id) => {
		axios.delete(`https://banana-surprise-70079.herokuapp.com/deletebook/${id}`).then((res) => {
			// console.log(res);
			toast.warning('Delete Successfully');
			history.push('/admin/')
		});
	};

	const history = useHistory();

	return (
		<div>
			<h2>Manage your products.</h2>
			<div>
				<Table striped bordered hover size="sm">
					<thead>
						<tr>
							<th>Book Name</th>
							<th>Author Name</th>
							<th>Price</th>
							<th>Delete Product</th>
						</tr>
					</thead>

					<tbody>
						{books.map((book) => (
							<Book book={book} deleteBook={deleteBook} />
						))}
					</tbody>
				</Table>
			</div>
			<div>
				<div className="d-flex flex-wrap">

				</div>

			</div>
		</div>
	);
}

export default ManageProduct;
