import axios from "axios"
import React, { useEffect, useState } from "react";
import API from "../utils/API.js"
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

export default function Search() {
        // Setting our component's initial state
        const [books, setBooks] = useState([])
        const [bookSearch, setBookSearch] = useState("")

        const handleInputChange = event => {
            const { value } = event.target;
            setBookSearch(value);
            };

        const handleFormSubmit = event => {
            // When the form is submitted, prevent its default behavior, get recipes update the recipes state
            event.preventDefault();
            API.searchBook(bookSearch)
                .then((data) => {
                    console.log(data.data.items)
                    setBooks(data.data.items)
                })
            //   .then(res => setBooks(data.data.items))
            .catch(err => console.log(err));
        };

            // const handleChange = events => {
                //     const inputValue = events.target.value
                //     API.searchBook(inputValue).then((data) => {
                    //         console.log(data)
                    //     })
                    // }
                // }

    return (
        <div>
            <Container>
            <h1 style={{textAlign: "center"}}>Search Page</h1>
                    <div >
                        <input 
                        name="search" 
                        value={bookSearch}
                        onChange={handleInputChange}
                        placeholder="search"
                        />

                        <button
                            onClick={handleFormSubmit}
                            type="success"
                            className="btn btn-success"
                            >Search
                        </button>
                    </div>
                <div>
                    {books.map(book => {
                    return (
                        <ListItem key={book.id}>
                            <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="thumbnail"/>
                            <a href={book.volumeInfo.infoLink} target="_blank">
                            <strong>
                            {book.volumeInfo.title} by {book.volumeInfo.authors}
                            </strong>
                            </a>
                        </ListItem>
                    );
                    })}
                </div>
            </Container>
        </div>
    )}