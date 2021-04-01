import React from 'react';

function Book({ book, deleteBook }) {
	const { name, author, price, _id } = book;
	return (
		<div className="m-2 p-3 bg-light">
			<h4>{name}</h4>
			<h4>{author}</h4>
			<h4>{price}</h4>
			<button className="btn btn-danger" onClick={() => deleteBook(_id)}>
				Delete
			</button>
		</div>
	);
}

export default Book;
