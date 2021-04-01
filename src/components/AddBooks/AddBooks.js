import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Button, Col } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

const AddBooks = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setIMageURL] = useState(null);
    const [book, setBook] = useState({});

    const onSubmit = data => {
        console.log(book);

        const url = `http://localhost:5000/addBook`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(book)
        })
            .then(res => console.log('server side response', res))

        data.preventDefault();
    };

    const handleAddBook = (e) => {
        console.log(e.target.name);
        if (e.target.name === 'book') {
            const name = (book.name = e.target.value);
            setBook({ ...book, name });
        } else if (e.target.name === 'author') {
            const author = (book.author = e.target.value);
            setBook({ ...book, author });
        } else if (e.target.name === 'price') {
            const price = (book.price = e.target.value);
            setBook({ ...book, price });
        }
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'bc1891d9e3a9ddc7763a8b1ba4e7c6bd');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                const url = (book.url = response.data.data.display_url);
                setBook({ ...book, url });
                setIMageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <Form onSubmit={(e) => onSubmit(e)}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Book Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" name="book" onChange={(e) => handleAddBook(e)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Author Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" name="author" onChange={(e) => handleAddBook(e)} />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail" >
                        <Form.Label>Add Price</Form.Label>
                        <Form.Control type="string" placeholder="Enter price" name="price" onChange={(e) => handleAddBook(e)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.File id="formcheck-api-regular">
                            <Form.File.Label>Add Book Cover Photo</Form.File.Label>
                            <Form.File.Input onChange={handleImageUpload} />
                        </Form.File>

                    </Form.Group>
                </Form.Row>

                <Button variant="primary" type="submit">
                    Save
            </Button>
            </Form>
        </div>
    );

};

export default AddBooks;