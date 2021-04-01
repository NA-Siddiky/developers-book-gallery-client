import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {

    // console.log(book);

    return (
        <div className="col-md-3">
            <img style={{ height: '300px', width: '300px' }} src={book.url} alt="" />

            <h4>Book Name : {book.name}</h4>
            <h5>Author: {book.author}</h5>
            <h5>Price: $ {book.price} <Link to={`/checkout/${book._id}`}>Bye Now</Link></h5>


        </div>
    );
};

export default Book;