import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Home = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div className="row">
            {
                books.map(book => <Book book={book}></Book>)
            }
        </div>
    );
};

export default Home;