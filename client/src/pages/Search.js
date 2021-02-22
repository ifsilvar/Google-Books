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
      
        // Load all books and store them with setBooks
        // useEffect(() => {
        //     loadBooks()
        // }, [])
        
        // function loadBooks(event) {
            // console.log(events)
            // const inputValue = event.srcElement
            // API.searchBook(inputValue).then((data) => {
            //     console.log(data.data.items)
            //     setBooks(data.data.items)
            // })
            // .catch(err => console.log(err));
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

            <h1>Search Page</h1>
            <input 
            name="search" 
            value={bookSearch}
            onChange={handleInputChange}
            placeholder="search"
            />

            <button
                onClick={handleFormSubmit}
                type="success"
                className="input-lg"
                >Search
            </button>

            <List>
                {books.map(book => {
                  return (
                    <ListItem key={book.id}>
                        <a href={book.volumeInfo.infoLink}>
                        <strong>
                          {book.volumeInfo.title} by {book.volumeInfo.authors}
                        </strong>
                        </a>
                      <DeleteBtn onClick={() =>{}} />
                    </ListItem>
                  );
                })}
              </List>

        </div>
    )}