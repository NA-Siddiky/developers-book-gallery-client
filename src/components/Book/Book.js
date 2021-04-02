import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Book.css'

const Book = ({ book }) => {

    // console.log(book);

    return (
        <div className="homeView p-1 d-flex flex-wrap">
            <Card style={{ width: '18rem' }}            >
                <Card.Img variant="top" src={book.url} />
                <Card.Body>
                    <Card.Title>{book.name}</Card.Title>
                    <Card.Text>Author: {book.author}</Card.Text>
                    <h5>Price: ৳ {book.price} <Link to={`/checkout/${book._id}`}><Button variant="primary">Buy Now</Button></Link></h5>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Book;