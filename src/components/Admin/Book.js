import React from 'react';

function Book({ book, deleteBook }) {
	const { name, author, price, _id } = book;
	return (
		<>
			<tr>
				<td>{name}</td>
				<td>{author}</td>
				<td>{price}</td>
				<td><button className="btn btn-danger" onClick={() => deleteBook(_id)}>
					Delete
			</button></td>
			</tr>

		</>
	);
}

export default Book;
